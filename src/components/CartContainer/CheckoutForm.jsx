import React, { useState } from "react";
import InputForm from "./InputForm";


function CheckoutForm({ onCheckout }) {
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    email: "",
    direccion: "",
    celular: ""
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const nuevosDatosCliente = { ...datosCliente, [name]: value };

    setDatosCliente(nuevosDatosCliente);
  }


  function onSubmit(evt) {
    evt.preventDefault();
    if (datosCliente.nombre === "" || datosCliente.email === "" || datosCliente.direccion === "" || datosCliente.celular === "") {
      alert("Please fill out all the fields.");
    } else {
      setDatosCliente({
        nombre: datosCliente.nombre,
        email: datosCliente.email,
        direccion: datosCliente.direccion,
        celular: datosCliente.celular,
      });
      onCheckout(datosCliente);
    }
  }

  return (
    <div>
      <form>
        <h1 style={{ textAlign: "center", textDecoration: "underline", marginTop: 10, marginBottom: 30 }}>Iniciar compra:</h1>
        <InputForm
          value={datosCliente.nombre}
          field="nombre"
          title="Nombre y Apellido:"
          onChange={handleInputChange}
        />
        <InputForm
          value={datosCliente.email}
          field="email"
          title="Email:"
          onChange={handleInputChange}
        />
        <InputForm
          value={datosCliente.direccion}
          field="direccion"
          title="Dirección:"
          onChange={handleInputChange}
        />
        <InputForm
          value={datosCliente.celular}
          field="celular"
          title="Celular:"
          onChange={handleInputChange}
        />
        <button className="button" onClick={onSubmit}>
          Comprar
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;