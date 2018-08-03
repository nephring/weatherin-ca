import React from 'react'
import ConditionEntity from './../condition-entity/condition-entity'
import Temperature from './../temperature/temperature'
import Forecast from '../forecast/forecast'

import { HumidityIcon, WindIcon, TemperatureIcon, PressureIcon } from './../../icons/icons'
import ClearSkyDayIcon from './../../icons/clear-sky-day'


import styles from './details.module.scss'

const Details = () => (
  <div className={styles.container}>
    <div className={styles.conditionContainer}>
      <div className={styles.temperatureWrapper}>
        <Temperature />
        <div className={styles.conditionIcon}>
          <ClearSkyDayIcon />
        </div>
      </div>
      <span className={styles.conditionStatus}>Partly Cloudy</span>
      <span>Reel feel: 19&deg;</span>
    </div>
    <hr className={styles.separator} />
    <div className={styles.conditionSection}>
      <ConditionEntity
        iconComponent={<HumidityIcon size={25} />}
        value='35%'
      />
      <ConditionEntity
        iconComponent={<TemperatureIcon size={25} />}
        value={(<span>25&deg;</span>)}
      />
      <ConditionEntity
        iconComponent={<WindIcon size={25} />}
        value='7 m/s'
      />
      <ConditionEntity
        iconComponent={<PressureIcon size={25} />}
        value='1012 hPa'
      />
    </div>
    <div className={styles.forecast}>
      <Forecast />
      <Forecast />
      <Forecast />
    </div>
  </div>
)

export default Details