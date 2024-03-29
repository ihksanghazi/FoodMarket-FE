import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumericFormat} from 'react-number-format';

const Number = ({number, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumericFormat
        value={number}
        displayType="text"
        decimalScale={1}
        renderText={value => <Text style={style}>{value}</Text>}
        decimalSeparator="."
        fixedDecimalScale
      />
    );
  }
  return (
    <NumericFormat
      value={number}
      thousandSeparator="."
      displayType="text"
      prefix="Rp. "
      renderText={value => <Text style={style}>{value}</Text>}
      decimalSeparator=","
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
