function opentab(tabId) {
    const contents = document.querySelectorAll('.skill-content');
    const tabs = document.querySelectorAll('.skill-set');

    contents.forEach(content => content.classList.remove('active-tab'));
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    document.getElementById(tabId).classList.add('active-tab');
    event.currentTarget.classList.add('active-tab');
}