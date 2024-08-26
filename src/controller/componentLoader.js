// Component  Loader

async function loadComponents(url,targetElement){
    const response = await fetch(url);
   
    const html = await response.text();
    console.log(html);
    document.querySelector(targetElement).innerHTML = html
}

export default loadComponents;