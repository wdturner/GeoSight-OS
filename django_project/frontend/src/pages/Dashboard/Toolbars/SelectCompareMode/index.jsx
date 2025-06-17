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
   import React, { useEffect, useRef, useState } from "react";
   import { useDispatch, useSelector } from "react-redux";
   import { Select } from '../../../../components/Input';

   const comparisonModes = [
    { value: 'outline', label: 'Outline & Fill'},
    { value: 'swipe', label: 'Swipe'}
  ]
   
  export default function SelectCompareMode({ onSelect }) {
    const compareMode = useSelector((state) => state.mapMode.compareMode); 
  
    if (!compareMode) return null;
  
    return (
      <div className="CompareModeDropDown">
        <Select 
          options={comparisonModes}
          onChange={(option) => {
            if (onSelect) {
              onSelect(option);
            }
          }}
        />
      </div>
    );
  }
  