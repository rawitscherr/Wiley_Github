// This is a .js file that has been linked in the <head> of each Support document.

function h2CreateAnchors() {
  // Create an anchor for each <h2>.
  for (i = 0; i < document.getElementsByTagName("h2").length; i++) {
    // Create an id by fetching the <h2> text, forcing it lowercase, and replacing spaces.
    var h2Original = document.getElementsByTagName("h2")[i];
    var originalText = h2Original.innerHTML;
    var lowercaseText = originalText.toLowerCase();
    var underscoreText = lowercaseText.split(' ').join('_');
    h2Original.id = underscoreText;
    // Build the <a>.  Put it where the <h2> is now.  Make the <h2> a child of the <a>.
    var h2 = document.getElementById(h2Original.id);
    var parent = h2.parentNode;
    var a = document.createElement('a');
    a.href = "#" + underscoreText;
    parent.replaceChild(a, h2);
    a.appendChild(h2);
  }
  return false;
}

function liCreateAnchors() {
  // Create an anchor for each <li> that is a child of a "procedure" classed <ol>.
  var allLists = document.getElementsByClassName("procedure");
  for (i = 0; i < allLists.length; i++) {
    for (ii = 0; ii < allLists[i].children.length; ii++) {
      // Build the <div>.  Add a class for CSS styling.  Add an id so you can grab it with JS.
      // The id follows an h2Number_liNumber convention.
      var div = document.createElement('div');
      div.className += "list_item_anchor";
      div.id = (i + 1) + "_" + (ii + 1);
      // Define the current list item in a variable.  Insert the div as the first child of it.
      var li = allLists[i].children[ii];
      li.insertBefore(div, li.firstChild);
      // Build the <a>.  Put it where the <div> is now.  Make the <div> a child of the <a>.
      var parent = div.parentNode;
      var a = document.createElement('a');
      a.href = "#" + div.id;
      parent.replaceChild(a, div);
      a.appendChild(div);
    }
  }
  return false;
}

// All functions that need to be executed just before the <body> is closed should be defined here.
function postRenderFunctions() {
  h2CreateAnchors();
  liCreateAnchors();
}