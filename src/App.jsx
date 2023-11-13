import "./App.css";
import clips from "./assets/clips.svg";
function App() {
  const short_btn = document.getElementById("short_btn");
  const reload_btn = document.getElementById("reload_btn");

  function shortenUrl() {
    var url_original = document.getElementById("url_original").value;
    var apiUrl =
      "https://tinyurl.com/api-create.php?url=" +
      encodeURIComponent(url_original);
    var url_encurtadaTextArea = document.getElementById("url_encurtada");

    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        url_encurtadaTextArea.value = data;
      })
      .catch((error) => {
        url_encurtadaTextArea.value = "Erro: Impossível encurtar a URL!";
      });
  }

  function reloadBtn() {
    location.reload();
  }

  return (
    <>
      <div className="container">
        <img src={clips} alt="" />
        <h1>Encurtador de Links</h1>
        <label htmlFor="url_original">Insira a URL que deseja encurtar:</label>
        <input
          type="text"
          id="url_original"
          placeholder="https://example.com"
        />
        <div className="buttons">
          <button id="reload_btn" onClick={reloadBtn}>
            Recarregar
          </button>
          <button id="short_btn" onClick={shortenUrl}>
            Make it happen!
          </button>
        </div>
        <label htmlFor="url_encurtada">URL Encurtada:</label>
        <textarea id="url_encurtada" rows="3" readOnly></textarea>
      </div>
    </>
  );
}

export default App;
