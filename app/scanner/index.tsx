import { Camera, CameraView } from "expo-camera";
import { Stack, useRouter } from "expo-router";
import { Link, Linking, Platform, View, Trigger, Vibration, StatusBar, StyleSheet,  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Overlay } from './overlay'
import { useEffect, useState } from "react";



export default function Home() {
    const [qrCodeData, setQrCodeData] = useState("")
    const router = useRouter();
    let hasRun = false;
    const scanned = (data) => {
       if (!hasRun && qrCodeData == ""){
            router.push('/');
            Vibration.vibrate(1 * 500, false);
            setTimeout( () =>{
            setQrCodeData(data);
            console.log(data);
            },500)
            hasRun = true;
       } 
    }

    return(
        <>
             <CameraView ratio="16:9" style={StyleSheet.absoluteFillObject} facing="back" onBarcodeScanned={({ data }) => { scanned(data)}}/>
            <SafeAreaView style={StyleSheet.absoluteFillObject}>
                <Stack.Screen options={{title: "Overview", headerShown: false,}}/>
                {Platform.OS === "android" ? <StatusBar hidden/> : null}
                <Overlay/>
            </SafeAreaView>
        </>
    );

}
