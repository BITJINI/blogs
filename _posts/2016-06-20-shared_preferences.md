---
layout: post
categories: [javascript, backbone, node.js]
title: Shared Preferences
summary: Shared Preferences
author: veena14cs
profile: https://avatars0.githubusercontent.com/u/16301028?v=3&u=6a8763d83df27dab2bc7f33eed2b6d7805b707b2&s=140"
image: shared_p.png
user_image: veena.jpg
---

**Shared Preferences**

Android provides many ways to store the data of the application. One of the way is Shared Preferences. Shared Preferences allows you to save the state of an activity or any important data  in the form of key-value pairs and the data will persist even when the user closes the application.Each SharedPreferences file is managed by the framework and can be private or shared.

Android stores Shared Preferences settings as XML file in **shared_prefs** folder under 

```
DATA/data/{application package} directory.
```

The DATA folder can be obtained by 

```
callingEnvironment.getDataDirectory().
```

Shared Preferences is application specific i.e data is lost if the user uninstalls the application or if the user clears the application data through settings.

**Step 1**:To use shared preferences , you have to call a method getSharedPreferences() that returns a SharedPreference instance pointing to the file that contains the values of preferences.

````````
SharedPreferences sharedPreferences = getSharedPreferences(MyPREFERENCES, Context.MODE_PRIVATE);        
Ex: sharedPreferences =getSharedPreferences(MY_PREFS, 0);

````````

MY_PREFS : name of the file 
0 : is the operating mode

The first parameter is the key and second parameter is the mode.

**Step 2**:  We can save data to sharedpreferences using SharedPreferences.Editor class, for which we need to use edit method of the shared preference.


````````
SharedPreferences.Editor editor = sharedPreferences.edit();
editor.putString("name", sName));
editor.putString("password", sPassword));

editor.commit();

````````

**Step 3**:To retrive the values for corresponding keys you should use sharedpreferences.getString() method as shown below


````````
if (sharedpreferences.contains("name")) {
  sharedPreferences.getString("name",””);
}
if (sharedpreferences.contains("password")) {
  sharedPreferences.getString("password",””);
}
````````

Thus, using these get and put methods in shared preference we can perform this save and retrieval functionality.


