# Manageriale fisioterapia - Analisi per lo sviluppo

- [Funzionalità principali](#funzionalità-principali)
- [Web application UI](#web-application-ui)
- [Framework e tecnologie](#framework-e-tecnologie)
- [Sicurezza dei dati]()
- [Gestione dei dati offline]()
- [Politiche per la fatturazione](#politiche-per-la-fatturazione)
- [Gestione degli account utente]()
- [Recensioni]()
- [Vendita]()
- [Competitors](#competitors)

## <u>*Funzionalità principali*</u>

### **Gestione della cartella clinica dei pazienti**

Per ogni paziente si ha la possibilità di:
• Generalità (nome, cognome, sesso, età, residenza)
• Conoscere storia passata del paziente (documenti passati)
• Stato della cartella, sapere se il paziente ha appuntamenti in vista, se deve pagare o se ha già pagato, visualizzazione della fattura e possibilità di stamparla

### **Calendario/Agenda**

Il calendario è personale dell’utente, da qui si possono vedere gli appuntamenti a venire.
Si ha la possibilità di modificare il calendario, aggiungendo/togliendo appuntamenti ma anche inserendo appunti generici.

### **Triage e produzione del resoconto**

Produzione di un documento firmato dal fisioterapista che tratti il resoconto del triage.
Il documento ha formato pdf e può essere stampato in qualsiasi momento futuro.
Il documento afferma che il risultato è ottenuto tramite l’analisi delle pubblicazioni scientifiche, facendo riferimento alla sorgente, con l’analisi integrativa del fisioterapista stesso.

### **Video tutorial di esercizi**

Database di brevi video tutorial di esercizi e trattamenti, divisi per regione corporea, obbiettivo, patalogie da curare ecc...
La possibilità di costruire tabelle di esercizi da proporre al paziente.

### **Fatturazione**

Il programma permette la creazione automatica di fatture e l’eventuale invio di tali a commercialisti/ufficio delle entrate (SdI) e ricevere eventuali notifiche da parte dell’SdI sugli esiti dei controlli.
Il sistema si occuperà solo di fatture attive.

### **Modulistaica GDPR e consensi informativi**

Preocompilazione di tutti i moduli per il trattamento dei dati e della privacy:

- Modulo privacy
- Consenso informato
- Informativa
- Consenso al trattamento

### **Sistema di notifiche**

L’applicativo deve notificare i seguenti eventi:

- L’avvicinarsi di un appuntamento
- Scadenza di licenza d’utilizzo
- Aggiornamenti del software

## <u>*Web Application UI*</u>

- Main Page
- Log In
- Chi siamo
- Assistenza (Contattaci)
- Prodotti
- Termini di servizio
- Privacy policy
- Home Page manageriale
- Triage
- Pazienti
- Fatture
- Agenda
- Libreria di esercizi
- Aiuto (Documentazione)

## <u>*Framework e tecnologie*</u>

I framework utilizzati sono scelti per fornire due soluzioni:

- Un’applicazione (software) per mobile IOS e Android
- Un’applicazione web per il lavoro da computer

### **Web**

#### <u>Front-end</u>

- React (Interfaccia utente)
- Scss (Sassy css)
- Webpack e Babel (Per fare il bundle di tutti gli assets)

#### <u>Back-end</u>

- NodeJS (Runtime system) + nvm, npm
- MongoDB (Database non relazionale)
- Nginx (Web server)
- AWS (Hosting del server)

### **Mobile app**

Per entrambi I sistemi operativi si userà React Native con l’aggiunta delle librerie supportate da esso

## <u>*Politiche per la fatturazione*</u>

Ogni fattura deve contenere i seguenti campi:

- Nome e cognome
- Ragione sociale
- Indirizzo completo
- Numero di partita IVA
- Codice fiscale
- Numero della fattura in ordine progressivo di emissione
- Dati identificativi del cliente (nome, cognome, PEC, codice destinatario, codice fiscale)
- Prodotto/Servizio ceduto
- Ammontare dell’imponibile
- La percentuale dell’IVA (aliquota) o l’esenzione tramite articolo
- Eventuale dicitura di regime forfettario
- Totale da pagare

Le partite iva a regime forfettario con fatturazione fino a 25000€/anno non necessitano l’invio delle fatture all’agenzia delle entrate.
Per tutti gli altri casi è obbligatorio inviare la fattura elettronica (in formato XML) all’agenzia delle entrate (direttamente o tramite commercialista) per tutte le prestazioni non sanitarie.

L’agenzia delle entrate, o meglio l’SdI (Sistema di Interscambio) verificherà che tutti i dati inseriti siano corretti e procederà a consegnare la fattura al destinatario.
Esistono tre modi tramite cui l’SdI invia le fatture:

1. Tramite indirizzo PEC del destinatario.
2. Tramite codice destinatario (7 caratteri che identificano la piattaforma del programma di fatturazione su cui si desidera ricevere le fatture elettroniche) per chi non ha PEC ma è obbligato alla fatturazione elettronica.
3. Tramite Codice Fiscale del cliente se esso è un consumatore finale oppure è un contribuente a regime agevolato esonerato dall’obbligo di utilizzo della fattura elettronica (è necessario indicare in questo caso come codice destinatario sette zeri: 0000000). Chi emette la fattura ha l’obbligo di consegnare al cliente una copia cartacea o elettronica della fattura, oltre ad informarlo che una copia sarà presente nell’area riservata del sito dell’AdE. Se il cliente possiede una PEC occorre segnarlo in fattura. Se il cliente è estero occorre indicare come codice destinatario sette X: XXXXXXX. È onere del venditore l’invio del documento fiscale digitalmente o tramite cartaceo.

Per le prestazioni sanitarie non si deve emettere nessuna fattura elettronica ma bensì i dati devono essere inviate al sistema TS (tessera sanitaria) entro il 31 gennaio successivo dell’anno del pagamento del servizio.

## <u>*Competitors*</u>

Gestionali già sul mercato che hanno le stesse funzionalità:

- Fisiodate
- Fisiodesk
- Physiotools
