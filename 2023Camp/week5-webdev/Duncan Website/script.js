let displayed = 0
//Format: ["filename", price, "description", "link"]
//Note: all images should be .jpg
//Note last [] can not have a , but the other should
let toppers = [
    [],
    []
]

let dragons = [
    ["PurpleAndGreenDragons", 7, "A purple dragon is sleeping with her green dragonets.", "https://www.ebay.com/itm/404404430618?hash=item5e2861e71a:g:eyoAAOSwG09ktfNR&amdata=enc%3AAQAIAAAA4F5zrYgFI20EABPUBlaKXUzP3v9MsmsiMefloWPxa4%2B%2FyZhGIko2lMNlKCiEr8v%2FdHHV2nXkW3aulK17DmlYDlCLIizwPliyS%2BVrEmJTeIH6hQDJCrLUyWEz01APxc6DBm67XTrdVCns6tW49j36Zs4myfAaZPAQwU7tvy22ziID4aiZia6Phoi3mwdadfwdH9eZIIMne4JbqQJpe0%2BKfIg8qH52KywA1DFTSFUTrNN4W2I2BPIj7fRpJZIjacMNVod%2BVmN796AJKCl%2FqvmMP5D2KiSJF2zlpc5GTElFfkPL%7Ctkp%3ABk9SR8itx-O8Yg"],
    
]

let cats = [
    [],
    []
]

let scenes = [
    [],
    []
]

let pictures = [
    [],
    []
]

let weapons = [
    [],
    []
]

let sculptures = [
    [],
    []
]

let others = [
    ["REALLYCOOLMOOSE", 17, "Big, moose, resting in some grass", "https://www.ebay.com/itm/204419787424?hash=item2f985e6aa0:g:bt0AAOSwuvNkzs7J&amdata=enc%3AAQAIAAAAwPdDqDGfIwjcNHqPW1nYV1dRUSbNyksi3awbE%2BnUV0W59bgyGqUE3xVZeq2NSPaW4UckQ5BKB8enZTCzvc4yOxK%2BboWMFgenzaDxarsUwhEaAsRBGfvFohhlhTf5Juk9DQLtSU5%2B6bmSymYOpIfQ7ojiD8e3w6gPmGEwZxe1LNzFE4PJ95Bcy%2Fo2dAYnyVOCEF00%2FKPzbtYqpPkswWAySqIWbPDWQXWw4fxBGYf%2BHSolMo0NMs%2BMna%2B8fJxWXoqahw%3D%3D%7Ctkp%3ABk9SR9C7kOS8Yg"],
]

function fillImages(imageType) {
    //Do stuff
    let data = getImages(imageType)
    let container = document.getElementById("PCSTable")
    if (displayed >= data.length) {
        noMoreToDisplay()
        return
    }
    for (j = 0; j < 2; j++) {
        let rowElement = document.createElement("tr")
        for (i = displayed; i < displayed + 4; i++) {
            let dataCell = document.createElement("td")
            dataCell.className = "PCS-Cell"

            if (i < data.length) {
                let previewImg = document.createElement("img")
                previewImg.className = "PCS"
                previewImg.src = imageType + "/" + data[i][0] + ".jpg"
                dataCell.appendChild(previewImg)

                let priceBox = document.createElement("p")
                priceBox.className = "PCSBox-text"
                priceBox.innerHTML = "Cost: $" + data[i][1]
                dataCell.appendChild(priceBox)

                let descBox = document.createElement("p")
                descBox.className = "PCSBox-description"
                descBox.innerHTML = "Description: " + data[i][2]
                dataCell.appendChild(descBox)

                let buyButton = document.createElement("button")
                buyButton.className = "PCSBox-btn"
                buyButton.innerHTML = "Buy"

                let buyLink = document.createElement("a")
                buyLink.href = data[i][3]
                buyLink.appendChild(buyButton)
                dataCell.appendChild(buyLink)
            } else {
                blankImg = document.createElement("img")
                blankImg.className = "PCS"
                blankImg.src = "https://i.stack.imgur.com/mwFzF.png"
                blankImg.style.opacity = "0"
                dataCell.appendChild(blankImg)
            }

            rowElement.appendChild(dataCell)
        }
        container.appendChild(rowElement)
        displayed += 4
    }
}

function noMoreToDisplay() {

}

function getImages(type) {
    if (type == "toppers") {
        return toppers
    }
    if (type == "dragons") {
        return dragons
    }
    if (type == "cats") {
        return cats
    }
    if (type == "scenes") {
        return scenes
    }
    if (type == "pictures") {
        return pictures
    }
    if (type == "weapons") {
        return weapons
    }
    if (type == "sculptures") {
        return sculptures
    }
    if (type == "others") {
        return others
    }
}