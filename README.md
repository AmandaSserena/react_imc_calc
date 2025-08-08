# Calculadora de IMC (React + Vite)

> Projeto de estudo: calculadora de IMC com React, Vite e CSS responsivo.  
> **Inspirado e baseado nas aulas do Matheus Battisti – [Hora de Codar](https://github.com/matheusbattisti)**.  
> Créditos ao Matheus pelo conteúdo e didática que ajudaram a construir este projeto. 🙏

[▶️ Acessar a versão online](https://react-imc-calc-five.vercel.app/) • 
[📦 Repositório](https://github.com/AmandaSserena/react_imc_calc/tree/main/imc-calc)

---

## ✨ Funcionalidades
- Cálculo de IMC e exibição do resultado
- Tabela de classificações por faixa (com cores)
- Layout **responsivo** (desktop e mobile)
- Botões para **calcular** e **limpar**

---

## 🖼️ Screenshots

### Desktop
![Desktop](https://github.com/AmandaSserena/react_imc_calc/blob/main/imc-calc/public/PrintDesktop.png)

### Mobile
![Mobile](https://github.com/AmandaSserena/react_imc_calc/blob/main/imc-calc/public/PrintMobile.png)

---

## 🛠️ Tecnologias
- **React** + **Vite**
- **CSS** puro (responsivo)
- Deploy na **Vercel**

---

## 🚀 Como rodar localmente

```bash
# entre na pasta do projeto
cd imc-calc

# instale as dependências
npm install

# rode em modo desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar build
npm run preview
````

A aplicação ficará disponível (dev) em [http://localhost:5173](http://localhost:5173)

---

## 📁 Estrutura (resumo)

```
imc-calc/
├─ public/
│  └─ screenshots/
│     ├─ desktop.png
│     └─ mobile.png
├─ src/
│  ├─ components/
│  │  ├─ Button.jsx
│  │  ├─ ImcCalc.jsx
│  │  └─ ImcTable.jsx
│  ├─ data/
│  │  └─ data.js
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## ☁️ Deploy na Vercel

* **Root Directory**: `imc-calc`
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Framework Preset**: Vite

---

## 🙏 Créditos

Este projeto foi inspirado e desenvolvido a partir das aulas do **Matheus Battisti – [Hora de Codar](https://github.com/matheusbattisti)**.
A implementação e customizações de design foram feitas por **Amanda Serena**.

---


Se quiser, já posso gerar **os prints do desktop e mobile** da sua calculadora, para você só salvar na pasta `public/screenshots/` e ter o README pronto 100%. Quer que eu faça agora?
```
