/**
 * GeoSight is UNICEF's geospatial web-based business intelligence platform.
 *
 * Contact : geosight-no-reply@unicef.org
 *
 * .. note:: This program is free software; you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published by
 *     the Free Software Foundation; either version 3 of the License, or
 *     (at your option) any later version.
 *
 * __author__ = 'irwan@kartoza.com'
 * __date__ = '13/06/2023'
 * __copyright__ = ('Copyright 2023, Unicef')
 */

/* ==========================================================================
   CompareLayer
   ========================================================================== */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Plugin, PluginChild } from "../../MapLibre/Plugin";
import { Actions } from '../../../../store/dashboard'
import {
  CompareCheckedIcon,
  CompareUncheckedIcon
} from "../../../../components/Icons";
import { Select } from '../../../../components/Input';

import './style.scss';

/**
 * CompareLayer component.
 */
export default function CompareLayer({ disabled = false }) {
  const dispatch = useDispatch()
  const { compareMode } = useSelector(state => state.mapMode)
  const { name: outlineIndicatorName } = useSelector(state => state.selectedIndicatorLayer)
  const { name: innerIndicatorName } = useSelector(state => state.selectedIndicatorSecondLayer)
  const [ showDropDown, setShowDropDown ] = useState(false);

  const comparisonModes = [
    { value: 'outline', label: 'Outline & Fill'},
    { value: 'swipe', label: 'Swipe'}
  ]
  /**
   * FIRST INITIATE
   * */
  useEffect(() => {
    if (disabled && compareMode) {
      dispatch(Actions.MapMode.changeCompareMode())
    }
  }, [disabled]);

  return (
    <Plugin>
      <div className='CompareLayerComponent Active'>
        <PluginChild
          title={(compareMode ? 'Turn off' : 'Turn on') + ' compare Layers'}
          disabled={disabled}
          onClick={() => {
            if (!disabled) {
              if (!compareMode){
                setShowDropDown(true)
              } else {
                dispatch(Actions.MapMode.changeCompareMode())
              }          
            }
          }}
        >
          {
            compareMode ? <CompareCheckedIcon/> : <CompareUncheckedIcon/>
          }
        </PluginChild>
        {
          showDropDown && !compareMode && (
            <div className='CompareModeDropDown'>
              <Select 
                options={comparisonModes}
                onChange={(option) => {
                  dispatch(Actions.MapMode.changeCompareMode())
                  setShowDropDown(false)
                }}
              />
            </div>
          )
        }
      </div>
    </Plugin>
  )
}