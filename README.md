# react-native-with-navigation
Projeto configurado com react navigation v6 - stack e drawer 
SOMENTE ANDROID ATÉ O MOMENTO


<h2>Project setup</h2> 
<h4>yarn install</h4>

<h2>Init Metro</h2> 
<h4>yarn react-native start</h4>

<h2>Run android - Emulator or devide</h2> 
<h4>yarn react-native run-android</h4>


<h2>Modo de uso</h2> 
<h4>Editar no arquivo routes e escolher o tipo de navegação, importanto as duas existentes na pasta navigation</h4>



permissões do one signal no android manifest
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.INTERNET" />


criação de projeto no firebase console e em seguida criar um app, com API Cloud Messaging ativada


Crie um projeto no onSignal, passando o id sender do firebase do projeto e a chave de servidor(server key), que será gerada ao ativar o API Cloud Messaging


instalação do firebase no projeto

build gradle no android
cole o json dentro de android/src
dentro de dependencies
classpath 'com.google.gms:google-services:4.3.15'
dentro de allprojects{
	repositories{
		mavenCentral()
	}
}

build gradle dentro de android/app
apply plugin: 'com.google.gms.google-services'

android {
    compileSdkVersion 33

	defaultConfig{
		targetSdkVersion 33
	}
 

 dentro de dependencies
 implementation platform('com.google.firebase:firebase-bom:31.2.2')

no App.tsx insira a linha
OneSignal.setAppId('id gerada no onesignal');
