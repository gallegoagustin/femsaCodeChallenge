/* eslint-disable prettier/prettier */
import React from 'react';

interface Props {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
  children: React.ReactNode
}

const Compose = (props: Props) => {
  const { components = [], children } = props;

  return (
      <>
          {components.reduceRight((acc, Comp) => {
              return <Comp>{acc}</Comp>;
          }, children)}
      </>
  );
};

export default Compose;
