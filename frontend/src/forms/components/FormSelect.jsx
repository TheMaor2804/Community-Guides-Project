import { FormControl, FormHelperText, Grid2, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect } from 'react'
import { makeFirstLetterCapital } from '../../utils/algoMethods'


export default function FormSelect({
  name,
  data,
  label,
  onChange,
  selection,
  required = true,
  error,
  ...rest
}) {


  return (
    <Grid2 item="true" size={{ xs: 12 }} {...rest}>
      <FormControl required={required} sx={{ width: "100%" }}>
        <InputLabel>{makeFirstLetterCapital(label)}</InputLabel>
        <Select
          name={name}
          value={data[name]}
          label={makeFirstLetterCapital(label)}
          onChange={onChange}
        >
          {selection.map(selector => (selector.name !== "All" &&
            <MenuItem key={selector._id} value={selector._id}>{selector.name}</MenuItem>
          ))}
        </Select>
        <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
      </FormControl>
    </Grid2>
  )
}
