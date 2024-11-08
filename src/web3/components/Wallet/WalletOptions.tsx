"use client";

import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

/**
 * Returns all available connectors
 * @returns {object, function}
 */
export const useConnectors = () => {
  const { connectors, connect } = useConnect()
  return { connectors, connect }
}

/**
 * All connectors with default buttons
 * @returns JSX.Element
 */
export const WalletOptions = ({className}: {className: string}) => {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <WagamiConnectorButton
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
      className={className}
    />
  ))
}

/**
 * Default connector button
 * @returns JSX.Element
 */
export const WagamiConnectorButton = ({
  connector,
  onClick,
  className
}: {
  connector: Connector
  onClick: () => void,
  className?: string
}) => {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <button className={className} disabled={!ready} onClick={onClick}>
      {connector.name}
    </button>
  )
}
