import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Share } from '@capacitor/share';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Plugins } from "@capacitor/core";
// const { Share } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title="Base64 to Image Converter";
  base64String!: string;
  imageUrl: any;

  constructor(private http: HttpClient) {}

  async basicShare(){
    await Share.share({
      title: 'Learn Ionic fast',
      text:'Check out the Ionic Academy',
      url: 'https://ionicacademy.com'
    });
  }
  // async shareImage(){}

  async shareLocalFile(){}

  convertToImage(){
    this.imageUrl= this.base64String;
  }

  isValidString(){
    return this.base64String && this.base64String.length > 0;
  }
  isValidImage(){
    return this.imageUrl && this.imageUrl.length > 0;
  }

  async shareImage(){
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  await Share.share({
    url: photo.path,
  });
  }
}
