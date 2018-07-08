import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Tarefa } from '../models/tarefa';

@Injectable()
export class TarefaService {
  tarefasCollection: AngularFirestoreCollection<Tarefa>;
  tarefas: Observable<Tarefa[]>;
  tarefaDoc: AngularFirestoreDocument<Tarefa>;

  constructor(public afs: AngularFirestore) {
    //this.tarefas = this.afs.collection('tarefas').valueChanges();
    afs.firestore.settings({ timestampsInSnapshots: true });
   // afs.firestore.enablePersistence();
    }

   getTarefas(id: any) {
    this.tarefasCollection = this.afs.collection('tarefas', ref => ref.where('idTrab', '==', id).orderBy('numTarefa','asc'));
    this.tarefas = this.tarefasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tarefa;
        data.id = a.payload.doc.id;
        return data;
      });
    });    
    return this.tarefas;
  }

  addTarefa(tarefa: Tarefa) {
    this.tarefasCollection = this.afs.collection('tarefas');
    this.tarefas = this.tarefasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tarefa;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.tarefasCollection.add(tarefa);
  }

  deleteTarefa(tarefa: Tarefa) {
    this.tarefas = this.tarefasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tarefa;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.tarefaDoc = this.afs.doc(`tarefas/${tarefa.id}`);
    this.tarefaDoc.delete();
  }

  updateTarefa(tarefa: Tarefa) {
    this.tarefas = this.tarefasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tarefa;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    this.tarefaDoc = this.afs.doc(`tarefas/${tarefa.id}`);
    this.tarefaDoc.update(tarefa);
  }
}
