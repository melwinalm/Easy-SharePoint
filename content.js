chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});

function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  th.appendChild(s);
}

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if (msg.from === 'popup' && msg.subject === 'CloseConnectionMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/closeConnection.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SiteContentsMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/siteContents.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SiteSettingsMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/siteSettings.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'PeopleAndGroupsMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/peopleAndGroups.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SitePermissionsMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/sitePermissions.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SiteCollectionAdminsMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/siteCollectionAdmins.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SiteCollectionFeaturesMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/siteCollectionFeatures.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SiteFeaturesMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/siteFeatures.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'RecycleBinMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/recycleBin.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'TermStoreMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/termStore.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SiteColumnsMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/siteColumns.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'SiteContentTypesMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/siteContentTypes.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'UserAlertsMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/userAlerts.js'), 'body');
  }
  else if (msg.from === 'popup' && msg.subject === 'DesignManagerMessage') {
    injectScript(chrome.extension.getURL('scriptInjections/designManager.js'), 'body');
  }
  
});