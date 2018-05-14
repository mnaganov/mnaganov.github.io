var Mode = {
  HOME: 1,
  SHOP: 2,
  current: 1
};

var kClassChosen = "chosen";
var kClassBought = "bought";
var kClassGrayed = "grayed";
var kClassEdited = "edited";
var kClassItem = "item";
var kClassOptionSelected = "option-selected";
var kClassDone = "done";

var ignoreNextClick = false;

function documentClick(event)
{
  if (ignoreNextClick) {
    ignoreNextClick = false;
    return;
  }
  var element = event.target;
  if (!element)
    return;
  if (element.hasStyleClass(kClassItem))
    itemClicked(element);
  else if (element.id === "reset-button")
    reset();
  else if (element.constructor === HTMLInputElement)
    radioClicked(element);
  else if (element.previousSibling.constructor === HTMLInputElement) {
    element.previousSibling.checked = true;
    radioClicked(element.previousSibling);
  }
}

function documentTouchStart(event)
{
  var element = event.target;
  if (!element)
    return;
  if (element.hasStyleClass(kClassItem))
    itemTouchStarted(element);
}

function documentTouchEnd(event)
{
  var element = event.target;
  if (!element)
    return;
  if (element.hasStyleClass(kClassItem))
    itemTouchEnded(element);
}

function itemClicked(element)
{
  switch (Mode.current) {
  case Mode.HOME:
    if (element.hasStyleClass(kClassEdited) ||
        element.hasStyleClass(kClassBought))
      return;
    if (element.hasStyleClass(kClassChosen))
      element.removeStyleClass(kClassChosen);
    else
      element.addStyleClass(kClassChosen);
    break;
  case Mode.SHOP:
    if (element.hasStyleClass(kClassGrayed))
      return;
    if (element.hasStyleClass(kClassBought))
      element.removeStyleClass(kClassBought);
    else
      element.addStyleClass(kClassBought);
    updateDoneState(document.getElementById("list"));
    break;
  }
  saveState(document.getElementById("list"));
}

function itemTouchStarted(element)
{
  if (Mode.current !== Mode.HOME || element.isContentEditable)
    return;
  element.longPressTimer = setTimeout(itemLongPressed.bind(this, element), 1000);
}

function itemTouchEnded(element)
{
  if (Mode.current !== Mode.HOME || element.isContentEditable)
    return;
  if (element.longPressTimer) {
    clearTimeout(element.longPressTimer);
    delete element.longPressTimer;
  }
}

function itemLongPressed(element)
{
  delete element.longPressTimer;
  element.contentEditable = true;
  element.addStyleClass(kClassChosen);
  element.addStyleClass(kClassEdited);
  element.focus();
  element.onblur = itemOnBlur;
}

function itemOnBlur(event) {
  var element = event.target;
  if (!element)
    return;
  element.onblur = null;
  if (element.hasStyleClass(kClassItem))
    itemEditingFinished(element);
}

function itemEditingFinished(element)
{
  if (Mode.current !== Mode.HOME || !element.isContentEditable)
    return;
  ignoreNextClick = true;
  element.contentEditable = false;
  element.removeStyleClass(kClassEdited);
  updateAfterEditing(document.getElementById("list"), element);
}

function radioClicked(element)
{
  var list = document.getElementById("list");
  switch (element.id) {
  case "home-switch": switchToHomeMode(list); break;
  case "shop-switch": switchToShopMode(list); break;
  }
  saveState(list);
}

function reset()
{
  delete localStorage.appState;
  delete localStorage.appItems;
  history.go(0);
}

function loadItems(items)
{
  var result = document.createDocumentFragment();
  for (var i = 0, l = items.length; i < l; ++i) {
    if (items[i]) {
      var item = document.createElement("div");
      item.textContent = items[i];
      item.className = kClassItem;
      result.appendChild(item);
    } else {
      var separator = document.createElement("hr");
      result.appendChild(separator);
    }
  }
  return result;
}

function displayItemsFragmentInList(list, fragment)
{
  list.appendChild(fragment.cloneNode(true));
  applyiPhoneFix(list);
}

function applyiPhoneFix(list)
{
  if (navigator.userAgent.indexOf("iPhone") < 0) return;
  for (var node = list.firstChild; node; node = node.nextSibling) {
    if (node.hasStyleClass(kClassItem))
      node.onclick = function() {};  // Make the item clickable on iPhone.
  }
}

function loadState(list)
{
  if (!localStorage["appState"])
    return false;
  var state = String.prototype.split.call(localStorage["appState"], ":");
  switch (parseInt(state[0], 10)) {
  case Mode.HOME:
    document.getElementById("home-switch").checked = true;
    switchToHomeMode(list);
    break;
  case Mode.SHOP:
    document.getElementById("shop-switch").checked = true;
    switchToShopMode(list);
    break;
  }
  for (var node = list.firstChild, i = 1, l = state.length; node && (i < l); node = node.nextSibling) {
    if (node.hasStyleClass(kClassItem)) {
      node.className = state[i++];
    }
  }
  return true;
}

function onLoad()
{
  var items = kDefaultItems;
  if (localStorage["appItems"])
    items = localStorage["appItems"].split(":");
  displayItemsFragmentInList(
    document.getElementById("list"),
    loadItems(items));
  document.onclick = documentClick;
  document.ontouchstart = documentTouchStart;
  document.ontouchend = documentTouchEnd;
  if (!loadState(document.getElementById("list"))) {
    document.getElementById("home-switch").checked = true;
    document.getElementById("home-label").addStyleClass(kClassOptionSelected);
  }
  if (Mode.current === Mode.SHOP)
    updateDoneState(document.getElementById("list"));
}

function saveState(list)
{
  var state = [];
  state.push(Mode.current);
  var items = [];
  for (var node = list.firstChild; node; node = node.nextSibling) {
    if (node.hasStyleClass(kClassItem)) {
      state.push(node.className);
      items.push(node.textContent);
    } else {
      items.push("");
    }
  }
  localStorage["appState"] = state.join(":");
  localStorage["appItems"] = items.join(":");
}

function switchToShopMode(list)
{
  if (Mode.current === Mode.SHOP) return;
  Mode.current = Mode.SHOP;
  document.getElementById("home-label").removeStyleClass(kClassOptionSelected);
  document.getElementById("shop-label").addStyleClass(kClassOptionSelected);
  for (var node = list.firstChild; node; node = node.nextSibling) {
    if (!node.hasStyleClass(kClassItem)) continue;
    if (node.hasStyleClass(kClassEdited)) {
      node.removeStyleClass(kClassEdited);
      node.contentEditable = false;
    }
    if (node.hasStyleClass(kClassChosen))
      node.removeStyleClass(kClassChosen);
    else
      node.addStyleClass(kClassGrayed);
  }
  updateDoneState(list);
}

function switchToHomeMode(list)
{
  if (Mode.current === Mode.HOME) return;
  Mode.current = Mode.HOME;
  document.getElementById("home-label").addStyleClass(kClassOptionSelected);
  document.getElementById("shop-label").removeStyleClass(kClassOptionSelected);
  for (var node = list.firstChild; node; node = node.nextSibling) {
    if (!node.hasStyleClass(kClassItem)) continue;
    if (node.hasStyleClass(kClassGrayed))
      node.removeStyleClass(kClassGrayed);
    else
      node.addStyleClass(kClassChosen);
  }
  document.body.removeStyleClass(kClassDone);
}

function updateAfterEditing(list, node)
{
  if (!node.hasStyleClass(kClassItem)) return;
  var nodesToRemove = [], nodesToSplit = [];
  var text = node.innerText.split("\n").filter(function(element) { return !!element; });
  if (!text.length)
    nodesToRemove.push(node);
  else if (node.hasChildNodes() || text.length > 1)
    nodesToSplit.push([node, text]);
  nodesToRemove.forEach(function(node) { list.removeChild(node); });
  nodesToSplit.forEach(
    function(pair)
    {
      for (var i = 0; i < pair[1].length; ++i) {
        var item = document.createElement("div");
        item.textContent = pair[1][i];
        item.className = pair[0].className;
        list.insertBefore(item, pair[0]);
      }
      list.removeChild(pair[0]);
    });
  applyiPhoneFix(list);
  saveState(list);
}

function updateDoneState(list)
{
  var done = true;
  for (var node = list.firstChild; node; node = node.nextSibling) {
    if (node.hasStyleClass(kClassItem)
        && !node.hasStyleClass(kClassGrayed)
        && !node.hasStyleClass(kClassBought)) {
      done = false;
      break;
    }
  }
  if (done)
    document.body.addStyleClass(kClassDone);
  else
    document.body.removeStyleClass(kClassDone);
}
