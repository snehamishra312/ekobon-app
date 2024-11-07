export const deviceMode = {
    isMobile: window.innerWidth <= 576,
    isTab: window.innerWidth <= 768,
    isLaptop: window.innerWidth <= 992,
    isLargeDevice: window.innerWidth <= 1200
};

export const getHtmlElementById = (id: any) => {
    let my_element = document.getElementById(id);
    my_element?.scrollIntoView();
};

export const getMainImage = (allImages: any[]) => {
    return allImages.filter((item, index) => { if (item && item.toString().toLowerCase().includes('main')) { console.log("item", item); return item; } });
};