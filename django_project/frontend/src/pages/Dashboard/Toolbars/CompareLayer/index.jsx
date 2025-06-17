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

import './style.scss';

/**
 * CompareLayer component.
 */

  export default function CompareLayer({ disabled = false }) {
    const dispatch = useDispatch();
    const compareModeOn = useSelector(state => state.mapMode.compareMode);
    const { name: outlineIndicatorName } = useSelector(state => state.selectedIndicatorLayer);
    const { name: innerIndicatorName } = useSelector(state => state.selectedIndicatorSecondLayer);
    const [showDropDown, setShowDropDown] = useState(false);
  
  /**
  * FIRST INITIATE
  * */
    useEffect(() => {
      if (disabled && compareModeOn) {
        dispatch(Actions.MapMode.changeCompareMode());
      }
    }, [disabled]);
  
    return (
      <Plugin>
        <div className='CompareLayerComponent Active'>
          <PluginChild
            title={(compareModeOn ? 'Turn off' : 'Turn on') + ' compare Layers'}
            disabled={disabled}
            onClick={() => {
              if (!disabled) {
                dispatch(Actions.MapMode.changeCompareMode());
              }
            }}
          >
            {compareModeOn ? <CompareCheckedIcon /> : <CompareUncheckedIcon />}
          </PluginChild>
        </div>
      </Plugin>
    );
  }
  