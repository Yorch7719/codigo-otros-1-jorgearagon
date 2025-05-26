const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Correción de los selectores que deben incluir el símbolo correspondiente.
const $n = document.querySelector('.name'); // Antes decía 'name', que no es válido
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location'); // en HTML no estaba, deberías agregar este <p> también

// Se agrega async a la función para poder usar await.
async function displayUser(username) {
  $n.textContent = 'cargando...';
  try { // Se agregó manejo de errores con try/catch
    const response = await fetch(`${usersEndpoint}/${username}`);

    // Validamos si la respuesta es exitosa...
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log(data);

    // Se actualiza para evitar que la interfaz muestre un espacio en blanco o null
    $n.textContent = data.name || 'Nombre no disponible';
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}` // Se agrega el .message
}

// Llamamos a la función con el nombre de usuario de GitHub
displayUser('stolinski');