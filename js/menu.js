const btnMobile = document.getElementById("btn-mobile");

function toggleMenu () {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active')
    const header = document.getElementById("header");
    header.classList.toggle('active-header')
    document.body.classList.toggle('overflow-hidden')
}

btnMobile.addEventListener("click", toggleMenu)

// add o chatbot
window.watsonAssistantChatOptions = {
integrationID: "af9599e9-1cfa-4a86-9a9a-857ce8bddd00", // The ID of this integration.
region: "us-south", // The region your integration is hosted in.
serviceInstanceID: "4746c11a-4358-4b41-b9d7-52ff48f0620b", // The ID of your service instance.
onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
const t=document.createElement('script');
t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
document.head.appendChild(t);
});
