var container = document.querySelector("#unity-container");
      var canvas = document.querySelector("#unity-canvas");
      var loadingBar = document.querySelector("#unity-loading-bar");
      var progressBarFull = document.querySelector("#unity-progress-bar-full");
      var fullscreenButton = document.querySelector("#unity-fullscreen-button");
      var warningBanner = document.querySelector("#unity-warning");

      function unityShowBanner(msg, type) {
        function updateBannerVisibility() {
          warningBanner.style.display = warningBanner.children.length
            ? "block"
            : "none";
        }
        var div = document.createElement("div");
        div.innerHTML = msg;
        warningBanner.appendChild(div);
        if (type == "error") div.style = "background: red; padding: 10px;";
        else {
          if (type == "warning")
            div.style = "background: yellow; padding: 10px;";
          setTimeout(function () {
            warningBanner.removeChild(div);
            updateBannerVisibility();
          }, 5000);
        }
        updateBannerVisibility();
      }

      var buildUrl = "./Flappybird/Build";
      var loaderUrl = buildUrl + "/Builds.loader.js";
      var config = {
        dataUrl: buildUrl + "/Builds.data.br",
        frameworkUrl: buildUrl + "/Builds.framework.js.br",
        codeUrl: buildUrl + "/Builds.wasm.br",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "ScaryStudio",
        productName: "Flappy Bird",
        productVersion: "1.0",
        showBanner: unityShowBanner,
      };

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content =
          "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
        document.getElementsByTagName("head")[0].appendChild(meta);
        container.className = "unity-mobile";
        canvas.className = "unity-mobile";

        unityShowBanner("WebGL builds are not supported on mobile devices.");
      } else {
        canvas.style.width = "600px";
        canvas.style.height = "960px";
      }

      loadingBar.style.display = "block";

      var script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        })
          .then((unityInstance) => {
            loadingBar.style.display = "none";
            fullscreenButton.onclick = () => {
              unityInstance.SetFullscreen(1);
            };
          })
          .catch((message) => {
            alert(message);
          });
      };
      document.body.appendChild(script);