/*jshint esversion: 6 */
/**
 * Wait for an element before resolving a promise
 * @param {String} querySelector - Selector of element to wait for
 * @param {Integer} timeout - Milliseconds to wait before timing out, or 0 for no timeout
 * @returns {Promise<{querySelector: string matchedElements: Element[] }>}  resolves with original selector & found elements
 */
function waitForElement(querySelector, timeout) {
    return new Promise((resolve, reject) => {
        /* Do a quick check so see if the element is already in the dom */
        const matchedElements = document.querySelectorAll(querySelector)
        if (matchedElements.length) {
            resolve({
                querySelector,
                matchedElements
            })
        }

        let timer = null

        /* Element wasn't already in the dom, so we shall listen to changes for a while */
        const observer = new MutationObserver(
            () => {
                const matchedElements = document.querySelectorAll(querySelector)
                if (matchedElements.length) {
                    if (timer) clearTimeout(timer)
                    observer.disconnect()
                    resolve({
                        querySelector,
                        matchedElements
                    })
                }
            })

        // watch changes to the body & its sub elements
        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        /* Enforce the timeout */
        if (timeout) {
            timer = setTimeout(() => {
                observer.disconnect() // clean up
                reject(querySelector) // we didn't find anything in time :(
            }, timeout)
        }
    })
}

// TY Shadow from Millennium & lazarFlashes for the code above 

async function runStyling(){
    if (document.title !== "Steam"){return;}
    const { querySelector, matchedElements } = await waitForElement('[class*="_1rDh5rXSFZJOqCa4UpnI4z"]', 10000)
    console.log('awaited code', querySelector, matchedElements)
    
    const rootMenuNav = document.querySelector("[class*='_39oUCO1OuizVPwcnnv88no']")
    const accountNewsMore = document.querySelector("[class*='_1-9sir4j_KQiMqdkZjQN0u']")
    
    const topBar = document.querySelector("[class*='_3Z7VQ1IMk4E3HsHvrkLNgo']")
    const bottomBar = document.querySelector("[class*='_1_yS5UP7el0aN4vntx3dx']")
    const outerFrame = document.querySelector("[class*='_3mz8wQ6Q44B8P7pzPP4Iyw']")
    const contentFrame = document.querySelector("[class*='_1rDh5rXSFZJOqCa4UpnI4z']")

    const gameIcon = document.querySelector("[class*='_3LKQ3S_yqrebeNLF6aeiog']")
    
    var vrMode = document.querySelector("[class*='_3lRfTo8Wo3phXfE1DvK6QW']")
    
    const steamLogoContainer = document.querySelector("[class*='bSKGlAJG2UVWTsntEJY2v']")
    const newLogo = document.createElement("img")
    const searchIcon = document.querySelector("[class*='_1TxHdzOt3OD9ikR3xIseKe svg'")
    const newIcon = document.createElement("img")
    newLogo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpaIVBwsVcQhSnSyIijhKFYtgobQVWnUweemP0KQhSXFxFFwLDv4sVh1cnHV1cBUEwR8QJ0cnRRcp8b6k0CLGB5f3cd47h/vuA4R6malmxzigapaRisfEbG5FDLyiB2GqYYQlZuqJ9EIGnuvrHj6+30V5lve9P1evkjcZ4BOJZ5luWMTrxNObls55nzjESpJCfE48ZlCDxI9cl11+41x0WOCZISOTmiMOEYvFNpbbmJUMlXiKOKKoGuULWZcVzluc1XKVNfvkLwzmteU016mGEMciEkhChIwqNlCGhSjtGikmUnQe8/APOv4kuWRybYCRYx4VqJAcP/gf/J6tWZiccJOCMaDzxbY/RoDALtCo2fb3sW03TgD/M3CltfyVOjDzSXqtpUWOgL5t4OK6pcl7wOUOMPCkS4bkSH4qoVAA3s/om3JA/y3QverOrXmO0wcgQ7NaugEODoHRImWveby7q31u/95pzu8HiVBysCZNXyYAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkCxcLIiaC9YE/AAABgElEQVQ4y41Tv0sCYRh+9NoMp2ioqSWxhpb+gYKCnEToCOGCtkNojUYnJRSHPOqWc+imCIIgFDzQORXUUgxFHKKhwR/gXWNvi9/hjzv1gY/v5f3xvN/7fN/HAUAw5Oc+ip8EGwgi79nb3107C55ebWytf72X6l0zGAz5OcxBJBG+aTTrNI5Gs04BwefGIggi72XFAcHnZouRLEXAirO5NBERZXNpYn4AcM4j8G7vnDP76ODE3A1D/zZ+dSiqrDmndRi3xYvL65Hp0PIZAICWz8DlWt0c+VdsxXx+ffphohXLbxMa3KduX9gIiCTCUbvZp6EbQ9KNIRERxZKRJACABRRV1hRV1qq1splkRcBENLtZJQoi76nWyhM+RZU1y3dDNhBE3tvrd6ndaZEg8h5WPEPA7teKwBRqDpzHhz5HXIpK/UEPcSkqlSoFlCoFAPjrD3oTN2T77IMhPxdLRu5YZ3Z8RZXzdvmWzofHVLHdaVG70yJFlfNM7UUfboZ56QIA//3tbq2ow2VbAAAAAElFTkSuQmCC"
    newIcon.src = "data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTMgOEwxNSA4TTE1IDhDMTUgOS42NTY4NiAxNi4zNDMxIDExIDE4IDExQzE5LjY1NjkgMTEgMjEgOS42NTY4NSAyMSA4QzIxIDYuMzQzMTUgMTkuNjU2OSA1IDE4IDVDMTYuMzQzMSA1IDE1IDYuMzQzMTUgMTUgOFpNOSAxNkwyMSAxNk05IDE2QzkgMTcuNjU2OSA3LjY1Njg1IDE5IDYgMTlDNC4zNDMxNSAxOSAzIDE3LjY1NjkgMyAxNkMzIDE0LjM0MzEgNC4zNDMxNSAxMyA2IDEzQzcuNjU2ODUgMTMgOSAxNC4zNDMxIDkgMTZaIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+IDwvZz4KDTwvc3ZnPg=="

    // Moving all the big parts
    outerFrame.insertBefore(rootMenuNav, outerFrame.firstChild) 
    contentFrame.insertBefore(topBar, contentFrame.firstChild) 
    topBar.appendChild(accountNewsMore)
    contentFrame.appendChild(bottomBar)
    
    // Replace the logo with the old one
    steamLogoContainer.firstChild.remove()
    steamLogoContainer.insertBefore(newLogo, steamLogoContainer.firstChild)

    //Do the same with the advanced search button
    searchIcon.firstChild.remove()
    searchIcon.insertBefore(newIcon, searchIcon.firstChild)
    
    try{
        const bigPicture = document.querySelector("[class*='_3LKQ3S_yqrebeNLF6aeiog']").parentNode
        accountNewsMore.insertBefore(bigPicture, accountNewsMore.firstChild)
        if (vrMode != undefined){
            vrMode = vrMode.parentNode
            accountNewsMore.insertBefore(vrMode, accountNewsMore.firstChild)
        } 
    }catch(e){
        console.error(e);
    }
    // Move the VR & Bigpicture buttons from the right of the account button to the left
   
}

document.onkeyup = function (e){
    if (e.key.toLowerCase() === "f5"){
        window.opener.eval("location.reload()");
    }
}


if(document.title.toLowerCase() === "steam"){
    setTimeout(() => {
        runStyling()
    }, 2500)

}