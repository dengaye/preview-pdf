
const handleRender = (viewport) => {
    const outputScale = window.devicePixelRatio || 1;
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height = Math.floor(viewport.height) + "px";

    var transform =
        outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    var renderContext = {
        canvasContext: context,
        transform: transform,
        viewport: viewport,
    };

    return renderContext;
};

const loadPdf = (resourcePath) => {
    const loadingTask = pdfjsLib.getDocument(resourcePath);
    loadingTask.promise.then(function (pdf) {
        pdf.getPage(1).then(function(page) {
            const scale = 1;
            const viewport = page.getViewport({ scale });
            const renderContext =  handleRender(viewport);
            page.render(renderContext);
        });
    });
};

window.addEventListener("message", (event) => {
    const { resourcePath } = event.data;
    if (resourcePath) {
        loadPdf(resourcePath);
    }
});
