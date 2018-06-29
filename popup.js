function QueryTab(subject) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { from: 'popup', subject: subject }
    );
  });
}

document.getElementById('closeconnection').addEventListener("click", function () {
  QueryTab('CloseConnectionMessage');
});

document.getElementById('sitecontents').addEventListener("click", function () {
  QueryTab('SiteContentsMessage');
});

document.getElementById('sitesettings').addEventListener("click", function () {
  QueryTab('SiteSettingsMessage');
});

document.getElementById('peopleandgroups').addEventListener("click", function () {
  QueryTab('PeopleAndGroupsMessage');
});

document.getElementById('sitepermissions').addEventListener("click", function () {
  QueryTab('SitePermissionsMessage');
});

document.getElementById('sitecollectionadmins').addEventListener("click", function () {
  QueryTab('SiteCollectionAdminsMessage');
});

document.getElementById('sitecollectionfeatures').addEventListener("click", function () {
  QueryTab('SiteCollectionFeaturesMessage');
});

document.getElementById('sitefeatures').addEventListener("click", function () {
  QueryTab('SiteFeaturesMessage');
});

document.getElementById('recyclebin').addEventListener("click", function () {
  QueryTab('RecycleBinMessage');
});

document.getElementById('termstore').addEventListener("click", function () {
  QueryTab('TermStoreMessage');
});

document.getElementById('sitecolumns').addEventListener("click", function () {
  QueryTab('SiteColumnsMessage');
});

document.getElementById('sitecontenttypes').addEventListener("click", function () {
  QueryTab('SiteContentTypesMessage');
});

document.getElementById('useralerts').addEventListener("click", function () {
  QueryTab('UserAlertsMessage');
});

document.getElementById('designmanager').addEventListener("click", function () {
  QueryTab('DesignManagerMessage');
});
