import './App.css';

function App() {
  return (
<form className="main">
      <div className="main__center">
        <div className="main-center__head">
          <p className="main-center-head__text">
            Учет моих расходов
          </p>
        </div>
        <div className="main-center__body"> 
          <div className="main-center-body__location">
            <h4 className="main-center-body-location__text">
              Куда было потрачено:
            </h4>
            <input type="text" className="main-center-body-location__input" placeholder="Куда было потрачено:"/>
          </div>
          <div className="main-center-body__cash">
            <h4 className="main-center-body-cash__text">
              Сколько было потрачено:
            </h4>
            <input type="number" className="main-center-body-cash__input" placeholder="Сколько было потрачено:"/>
          </div>
          <button type="submit" className="main-center-body__submit">Добавить</button>
        </div>
        <div className="main-center__money">
          <h2 className="main-center-item__sum">
            Итого: 10000
          </h2>
        </div>
        <ul className="main-center__items">
          <li className="main-center-items__item">
            <h2 className="main-center-items-item__location">1) Магазин "Пятерочка"</h2>
            <div className="main-center-items-item__values">
              <h2 className="main-center-items-item-values__date">20.12.2003</h2>
              <h2 className="main-center-items-item-values__cash">1029 Р</h2>
              <div className="main-center-items-item-values__buttons">
                <div className="main-center-items-item-values-buttons__button">
                  <button className="main-center-items-item-values-buttons-button__rename"></button>
                </div>
                <div className="main-center-items-item-values-buttons__button">
                  <button className="main-center-items-item-values-buttons-button__delete"></button>
                </div>
              </div>
            </div>
          </li>
          <li className="main-center-items__item">
            <h2 className="main-center-items-item__location">2) Магазин "Магнит"</h2>
            <div className="main-center-items-item__values">
              <h2 className="main-center-items-item-values__date">13.03.2020</h2>
              <h2 className="main-center-items-item-values__cash">2321 Р</h2>
              <div className="main-center-items-item-values__buttons">
                <div className="main-center-items-item-values-buttons__button">
                    <button className="main-center-items-item-values-buttons-button__rename"></button>
                  </div>
                  <div className="main-center-items-item-values-buttons__button">
                    <button className="main-center-items-item-values-buttons-button__delete"></button>
                  </div>
                </div>
            </div>
          </li>
          <li className="main-center-items__item">
            <h2 className="main-center-items-item__location">3) Магазин "Эльдорадо"</h2>
            <div className="main-center-items-item__values">
              <h2 className="main-center-items-item-values__date">29.06.2023</h2>
              <h2 className="main-center-items-item-values__cash">6650 Р</h2>
              <div className="main-center-items-item-values__buttons">
                <div className="main-center-items-item-values-buttons__button">
                  <button className="main-center-items-item-values-buttons-button__rename"></button>
                </div>
                <div className="main-center-items-item-values-buttons__button">
                  <button className="main-center-items-item-values-buttons-button__delete"></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </form>
  );
}

export default App;
