/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Service_4.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Service_4(props) {
  const { nodes, materials } = useGLTF('./3D objects/Service_4/Service_4-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={materials.Tuerca_Material} />
      <mesh geometry={nodes.Circle_1.geometry} material={materials.Carpeta_Material} />
      <mesh geometry={nodes.Circle_2.geometry} material={materials.Papeles_Material} />
    </group>
  )
}

useGLTF.preload('./3D objects/Service_4/Service_4-transformed.glb')
