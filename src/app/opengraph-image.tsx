import { ImageResponse } from "next/og";
export const alt="Mono Code — digital presence for established local businesses";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:64,background:"#0A0D12",color:"#F5F7F4",fontFamily:"sans-serif"}}><div style={{display:"flex",alignItems:"center",fontSize:34,fontWeight:700}}>Mono <span style={{width:8,height:34,background:"#315CFF",transform:"skewX(-16deg)",margin:"0 8px"}}/> Code</div><div style={{fontSize:76,lineHeight:.98,letterSpacing:-4,maxWidth:960}}>A better digital foundation for the business you have already built.</div><div style={{display:"flex",justifyContent:"space-between",fontSize:22,color:"#AEB7C5"}}><span>Find → Trust → Contact</span><span>monocode.space</span></div></div>,size)}
