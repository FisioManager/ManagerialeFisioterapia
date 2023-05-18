# Guida

- [Build e Debug](#build-e-debug)
- [MongoDB](#mongodb)
- [Requisiti Funzionali](#requisiti-funzionali)
- [Requisiti non Funzionali](#requisiti-non-funzionali)
- [Interfacce](#interfacce)
- [Risorse](#risorse)

## *Build e Debug*

- `npx webpack`, build
- `npm run dev`, build + start application
- `npm run pretty`, format all files

## *MongoDB*

- `mongod --dbpath .`, runnare all'interno di /db per far partire il database
- `mongo`, entrare nella shell di mongodb
- `use databaseName`, selezionare database
- `show dbs`, show databases
- `show collections`, show collections

### **Database (fisiomanagerdb) collections**

- users
- patients
    - doucments
    - invoices
- doctors
- calendars
    - events
- tables
    - exercises

## Requisiti Funzionali

- [ ] Log In
- [ ] Registrazione
- [ ] Invio email contattaci
- [ ] CRUD pazienti + documenti 
- [ ] CRUD eventi su calendario
- [ ] CRUD fatture
- [ ] CRUD dipendenti
- [ ] CRUD tabelle + esercizi fisici
- [ ] Compilazione, Stampa di GDPR
- [ ] Triage + redazione del documento finale
- [ ] Creazione di schede con esercizi
- [ ] Area notifiche
- [ ] Scelta del piano di pagamento

## Requisiti non Funzionali

- [ ] Documentazione
- [ ] Mappa del sito
- [ ] Cookies
- [ ] Termini di servizio
- [ ] Privacy Policy
- [ ] Politiche di fatturazione
- [ ] Separazione dei dati per ogni cliente

## Interfacce

- [ ] Servizio di pagamento
- [ ] AdE e SdI
- [ ] Sistema tessera sanitaria
- [ ] Google Calendar
- [ ] What's App