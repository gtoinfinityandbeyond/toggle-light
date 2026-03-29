function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Reference Vol. 3')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Dashboard')
    .addItem('Open Dashboard', 'openDashboard')
    .addToUi();
}

function openDashboard() {
  const html = HtmlService.createHtmlOutputFromFile('Index')
    .setWidth(1400)
    .setHeight(900);
  SpreadsheetApp.getUi().showModalDialog(html, 'Dashboard Reference Vol. 3');
}
