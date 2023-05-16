import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage, useIntl } from 'react-intl';


const Job = (props) => {

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>
        <FormattedMessage id={props.offer.name} defaultMessage={props.offer.name} />
      </td>
      <td>
        <FormattedMessage id={props.offer.company} defaultMessage={props.offer.company} />
      </td>
      <td>
      <FormattedNumber
          value={props.offer.salary}
          style="currency"
        />{" Millón "} 
      </td>
      <td>
        <FormattedMessage id={props.offer.city} defaultMessage={props.offer.city} />
      </td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>   
      <td>
        <FormattedNumber
          value={props.offer.views}
          style="decimal"
        />
      </td>
    </tr>
  );
};

export default Job;
