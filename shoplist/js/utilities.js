Element.prototype.removeStyleClass = function(className) 
{
  // Test for the simple case first.
  if (this.className === className) {
    this.className = "";
    return;
  }
  var index = this.className.indexOf(className);
  if (index === -1)
    return;
  this.className = this.className.split(" ").filter(
    function(s) { return s && s !== className; }).join(" ");
};

Element.prototype.addStyleClass = function(className) 
{
  if (className && !this.hasStyleClass(className))
    this.className += (this.className.length ? " " + className : className);
};

Element.prototype.hasStyleClass = function(className) 
{
  if (!className)
    return false;
  // Test for the simple case
  if (this.className === className)
    return true;

  var index = this.className.indexOf(className);
  if (index === -1)
    return false;
  var toTest = " " + this.className + " ";
  return toTest.indexOf(" " + className + " ", index) !== -1;
};
