import React, { useState } from "react";
import { Link } from "react-router-dom";
import engrenagem from "../../assets/engrenagem.svg"


export default function ModAdmin() {
  const [showOptions, setShowOptions] = useState(false); // Estado para controlar a visibilidade das opções

  return (
    <div>
      {/* Botão flutuante */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={`btn btn-warning rounded-circle position-fixed d-flex justify-content-center align-items-center p-2 ${
          showOptions ? "active" : ""
        }`}
        style={{
          bottom: "20px",
          right: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          zIndex: 9999, // Garante que o botão fique acima de outros elementos
        }}
        onClick={() => setShowOptions(!showOptions)} // Alterna o estado de visibilidade
      >
        <img src={engrenagem} alt="engrenagem" />
      </div>

      {/* Opções do menu que aparecem quando o botão é clicado */}
      {showOptions && (
        <div
          className="bg-warning rounded position-fixed d-flex flex-column align-items-end"
          style={{ bottom: "80px", right: "20px", gap: "10px", zIndex: 9999 }}
        >
          <Link to="/admin/criarProduto" className="btn btn-warning btn-lg">
            Criar Produto
          </Link>
          <Link to="/admin/ListarPedidos" className="btn btn-warning btn-lg">
            Listar Pedidos
          </Link>
        </div>
      )}
    </div>
  );
}
