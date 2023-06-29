const mainContent = "Lời chúc ở đây"

const allbum1 = {
    content: "Nói gì đó về bức ảnh",
    cdn: "https://i.pinimg.com/originals/c6/59/cf/c659cf63a0737faa5f013ccb87bfe358.png"
}

const allbum2 = {
    content: "Nói gì đó về bức ảnh",
    cdn: "https://haycafe.vn/wp-content/uploads/2022/08/avatar-sadboiz-anh-mat-vo-cam.jpg"
}

const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
    const letter = document.querySelector(".letter");
    letter.classList.add("active");
    setTimeout(() => {
        const designContent = mainContent.split("");
        const mainLetterPage = document.querySelector(".letterContent");

        designContent.forEach((val, index) => {
            setTimeout(() => {
                mainLetterPage.innerHTML += val;
                if (index == (designContent.length - 1)) {
                    const allBum1 = document.querySelector("#allbum1");
                    allBum1.classList.add("active");

                    setTimeout(() => {
                        const contentAllbum1 = allbum1.content.split("");
                        allBum1.querySelector(".imgAllbum").src = allbum1.cdn;

                        contentAllbum1.forEach((valAllbum1, indexAllbum1) => {
                            setTimeout(() => {
                                allBum1.querySelector(".detailAllbum").innerHTML += valAllbum1;
                                if (indexAllbum1 == (contentAllbum1.length - 1)) {
                                    const allBum2 = document.querySelector("#allbum2");
                                    allBum2.classList.add("active");

                                    setTimeout(() => {
                                        const contentAllbum2 = allbum2.content.split("");
                                        allBum2.querySelector(".imgAllbum").src = allbum2.cdn;

                                        contentAllbum2.forEach((valAllbum2, indexAllbum2) => {
                                            setTimeout(() => {
                                                allBum2.querySelector(".detailAllbum").innerHTML += valAllbum2   
                                            }, 100 * (indexAllbum2 + 1))
                                        })
                                    })
                                }
                            }, 100 * (indexAllbum1 + 1))
                        })
                    }, 500)
                }
            }, 10 * index)
        })
    }, 500)
})