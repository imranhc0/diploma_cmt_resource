const htmlElemnt = document.getElementById("root");
const contributorArray = []
window.onload = async function () {
    await fetch("https://api.github.com/repos/AvishekGolder/diploma_cmt_resource/contributors")
    .then(response => response.json())
    .then(data => {
        data.forEach(el =>  {
            const comp = `
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 shadow-lg hover:bg-pink-200">
                <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="${el.avatar_url}">
                <p class="leading-relaxed"></p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm"><a target="_blank" href="${el.html_url}">${el.login}</a></h2>
                <p class="text-gray-500">Contributor</p>
                </div>
            </div>`
            htmlElemnt.innerHTML += comp
        })
    })
    .catch(err => console.log(err))
}

