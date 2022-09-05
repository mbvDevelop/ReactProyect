import styles from './solanaPrice-section.module.css';
import React, { useState } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots} from 'react-sparklines';
const coinDataURL = "https://api.coingecko.com/api/v3//coins/solana"
const chartURL = "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=eur&days=15&interval=daily"




const SolanaPriceSection = () => {

  const [price, setPrice] = useState('');
  const [change, setChange] = useState('');
  const [picture, setPicture] = useState('');
  const [ath, setAth] = useState('');
  const [totalVolume, setVolume] = useState('');
  const [marketCap, setMarketCap] = useState('');
  const [chartData, setChartData] = useState([])
  const getToken = async () => {
    await fetch(coinDataURL
    ).then((response) => {
      if (!response.ok) throw { response }
      return response.json();
    }).then((response) => {
      setPrice(response.market_data.current_price.eur);
      setPicture(response.image.large);
      setChange(response.market_data.price_change_percentage_24h)
      setAth(response.market_data.ath.eur)
      setVolume(response.market_data.total_volume.eur)
      setMarketCap(response.market_data.market_cap.eur)
    })
  }

    const getChart = async () => {
      await fetch(chartURL).then((response) => {
        if (!response.ok) throw { response }
        return response.json();
      }).then((response) => {
        let chartData = response.prices.map((item) => {
         return item[1]
        })
        setChartData(chartData)

      }).catch(error => {
        console.log(error);
      });
    }

    getChart()
    getToken()

    return (
      <section id="solanaPrice_section" className={styles.section_7}>
        <h2 className={styles.section_7_title}>Solana Tracker</h2>
        <div className={styles.section_7_container}>
          <div className={styles.section_7_solana}>
            <img src={picture} alt="" />
            <div className={styles.section_7_container_price}>
              <div className={styles.section_7_container_text}>
                <h1>Solana</h1>
                <p>Sol</p>
              </div>
              <div className={styles.section_7_container_valor}>
                <div className={styles.container_valor_price}>
                  <h4> 1 SOL = </h4> <span> <p>{price}€</p></span>
                </div>
                <div className={styles.container_valor_change}>
                  <h4> 24H : </h4><span> <p>{change}%</p></span>
                </div>
              </div>
              <div className={styles.section_7_container_specs}>
                <p>Ath: <span>{ath}</span> €.</p>
                <p>Volumen total: <span>{totalVolume}</span> €.</p>
                <p>Market cap: <span>{marketCap}</span> €.</p>
              </div>
            </div>
          </div>
          <div className={styles.section_7_graph}>
            <Sparklines data={chartData} >
              <SparklinesLine color="#16c784" margin={545245}  ></SparklinesLine>
              <SparklinesSpots  style ={{ fill : "#16c784" }} />
              <SparklinesReferenceLine  type="mean" />
            </Sparklines>
          </div>
        </div>
      </section>

    )
  }
  SolanaPriceSection.propTypes = {};

  SolanaPriceSection.defaultProps = {};

  export default SolanaPriceSection;
