import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Trabalho } from '../models/trabalho';

@Injectable()
export class TrabalhoService {
  trabalhosCollection: AngularFirestoreCollection<Trabalho>;
  trabalhos: Observable<Trabalho[]>;
  trabalhoDoc: AngularFirestoreDocument<Trabalho>;

  constructor(public afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true }); //necessário para ajustar a data.
    this.trabalhosCollection = this.afs.collection('trabalhos');
  }

  getTrabalhos() {
    this.trabalhos = this.afs.collection('trabalhos', ref => ref.orderBy('idNumero', 'desc')).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Trabalho;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.trabalhos;
  }

  getTrabalhoUnitario(id: Number) { // idNumero no banco é um Number
    return this.afs.collection('trabalhos', ref => ref.where('idNumero', '==', id)).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Trabalho;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    
    // return this.trabalhosCollection.snapshotChanges().map((item: any) => item);
    // this.trabalhos = this.afs.collection('trabalhos', ref => {
    //   return ref.where('idNumero', '==', id)
    // }).valueChanges();
    // return this.trabalhos;

  }

  updateTrabalho(trabalho: Trabalho) {
    console.log("entrou2");
    this.trabalhos = this.trabalhosCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Trabalho;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.trabalhoDoc = this.afs.doc(`trabalhos/${trabalho.id}`);
    console.log("entrou3");
    console.log(trabalho.status);
    this.trabalhoDoc.update(trabalho);
  }

  addTrabalho(trabalhos: Trabalho) {
    this.trabalhosCollection = this.afs.collection('trabalhos');
    this.trabalhos = this.trabalhosCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Trabalho;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.trabalhosCollection.add(trabalhos);
  }

  /* 
    addTrabalho(trabalho: Trabalho){
      this.trabalhosCollection.add(trabalho);
    }
  
    deleteTrabalho(trabalho: Trabalho){
      this.trabalhoDoc = this.afs.doc(`trabalhos/${trabalho.id}`);
      this.trabalhoDoc.delete();
    }
  
    updateTrabalho(trabalho: Trabalho){
      this.trabalhoDoc = this.afs.doc(`trabalhos/${trabalho.id}`);
      this.trabalhoDoc.update(trabalho);
    }
   */
}

