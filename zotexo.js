var zotexo_render_collection = function() {
    var R=%s;
    var Zotero = Components.classes['@zotero.org/Zotero;1'] .getService(Components.interfaces.nsISupports).wrappedJSObject;
    var print_names = function(collections, prefix){
        for (c in collections) {
            var fullname = prefix + '/' + collections[c].name;
            R.print(collections[c].id + ' ' + fullname);
            if (collections[c].hasChildCollections) {
                var subcol = Zotero.getCollections(collections[c].id);
                print_names(subcol, fullname); 
            };
        }};
    print_names(Zotero.getCollections(), '');
    var groups = Zotero.Groups.getAll();        
    for (g in groups){
        print_names(groups[g].getCollections(), 'group');
    }};

var zotexo_render_collection = function(coll, prefix) {
    var R=%s;
    var zotero = Components.classes['@zotero.org/Zotero;1'].getService(Components.interfaces.nsISupports).wrappedJSObject;
    if (!coll) {coll = null};
    if (!prefix){prefix=''};
    var collections = zotero.getCollections(coll);
    var full_name = "";
    
    for (c in collections) {
        full_name = prefix + '/' + collections[c].name;
        R.print(collections[c].id + ' ' + full_name);
        if (collections[c].hasChildCollections) {
	    var name = zotexo_render_collection(collections[c].id, full_name);
        };
    };
};

var zotexo_filename=('/home/vitoshka/works/OP/OP.bib');
var zotexo_id = 3;
var zotexo_prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService).getBranch('extensions.zotero.');
var zotexo_recColl = zotexo_prefs.getBoolPref('recursiveCollections');
var zotexo_file = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
zotexo_file.initWithPath(zotexo_filename);
//split
var zotexo_zotero = Components.classes['@zotero.org/Zotero;1'].getService(Components.interfaces.nsISupports).wrappedJSObject;
var zotexo_collection = true;
var zotexo_translator = new zotexo_zotero.Translate('export');
if (zotexo_id != 0){ //not all collections
    zotexo_collection = zotexo_zotero.Collections.get(zotexo_id);
    zotexo_translator.setCollection(zotexo_collection);
};
//split
if(zotexo_collection){
    zotexo_translator.setLocation(zotexo_file);
    zotexo_translator.setTranslator('9cb70025-a888-4a29-a210-93ec52da40d4');
    zotexo_prefs.setBoolPref('recursiveCollections', true);
    zotexo_translator.translate();
    zotexo_prefs.setBoolPref('recursiveCollections', zotexo_recColl);
    zotexo_out=':MozOK:';
}else{
    zotexo_out='Collection with the id ' + zotexo_id + ' does not exist.';
};
zotexo_out;


var render_collection = function(coll, prefix) {
    if (!coll) { 
        coll = null; 
    };
    if (!prefix){
        prefix="";
    };
    var collections = zotero.getCollections(coll);
    for (c in collections) {
        full_name = prefix + "/" + collections[c].name;
        repl.print(collections[c].id + " " + full_name);
        if (collections[c].hasChildCollections) {
	    var name = render_collection(collections[c].id, full_name);
        };
    };   
};

render_collection();


// ZoteroPane = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow("navigator:browser").ZoteroPane;




var filename=('%s');
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService).getBranch('extensions.zotero.');
var recColl = prefs.getBoolPref('recursiveCollections');
prefs.setBoolPref('recursiveCollections', true);
var file = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
file.initWithPath(filename);
var zotero = Components.classes['@zotero.org/Zotero;1'].getService(Components.interfaces.nsISupports).wrappedJSObject;
var collection = true;
var id = %s;
if (%s){
    var translator = new zotero.Translate('export');
    collection = zotero.Collections.get(id);
    translator.setCollection(collection);
};
if(collection){
    translator.setLocation(file);
    translator.setTranslator('9cb70025-a888-4a29-a210-93ec52da40d4');
    translator.translate();    
}else{
    repl.print("MozError: Collection with the id " + id + " does not exist.");
}
prefs.setBoolPref('recursiveCollections', recColl);


var zotero = Components.classes['@zotero.org/Zotero;1'].getService(Components.interfaces.nsISupports).wrappedJSObject;
repl.print(zotero.getZoteroDatabase().path);


var zotero = Components.classes['@zotero.org/Zotero;1'].getService(Components.interfaces.nsISupports).wrappedJSObject;
var id = %s;
var collection = zotero.Collections.get(id);
if(collection){
    ':MozOK:' + collection.dateModified;
}else{
    'Collection with the id ' + id + ' does not exist.';
}




var filename=('/home/vitoshka/works/foundations/estension_inf_general/extension_inf_general.bib');
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService).getBranch('extensions.zotero.');
var recColl = prefs.getBoolPref('recursiveCollections');
prefs.setBoolPref('recursiveCollections', true);
var file = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsILocalFile);
file.initWithPath(filename);
var zotero = Components.classes['@zotero.org/Zotero;1'].getService(Components.interfaces.nsISupports).wrappedJSObject;
var collection = true;
var id = 113;

if (true){
    var translator = new zotero.Translate('export');
    collection = zotero.Collections.get(id);
    translator.setCollection(collection);
}; 


if(collection){
    
    translator.setLocation(file);
    translator.setTranslator('9cb70025-a888-4a29-a210-93ec52da40d4');
    translator.translate();
    ':MozOK:';
}else{
    'Collection with the id ' + id + ' does not exist.';
};
prefs.setBoolPref('recursiveCollections', recColl);


2!=4;