// names and ids seggregated
const companies = [
  {
    companyId: 'MI42',
    companyName: '3M India'
  },
  {
    companyId: 'FT02',
    companyName: '63 Moons Tech'
  },
  {
    companyId: 'AME02',
    companyName: 'A2Z Infra Eng'
  },
  {
    companyId: 'ATL',
    companyName: 'AAA'
  },
  {
    companyId: 'AI45',
    companyName: 'Aarti Ind'
  },
  {
    companyId: 'AP21',
    companyName: 'AARTIPHARM'
  },
  {
    companyId: 'ADE',
    companyName: 'Aarvee Denim'
  },
  {
    companyId: 'AE19',
    companyName: 'Aarvi Encon'
  },
  {
    companyId: 'ABC9',
    companyName: 'AB Capital'
  },
  {
    companyId: 'ABM01',
    companyName: 'AB Money'
  },
  {
    companyId: 'ABB',
    companyName: 'ABB India'
  },
  {
    companyId: 'AI51',
    companyName: 'Abbott India'
  },
  {
    companyId: 'ACC06',
    companyName: 'ACC'
  },
  {
    companyId: 'AIS',
    companyName: 'ACE Integrated'
  },
  {
    companyId: 'AE13',
    companyName: 'Adani Enterpris'
  },
  {
    companyId: 'AP11',
    companyName: 'Adani Power'
  },
  {
    companyId: 'AW',
    companyName: 'Adani Wilmar'
  },
  {
    companyId: 'AW01',
    companyName: 'Ador Welding'
  },
  {
    companyId: 'CC22',
    companyName: 'Adroit Infotech'
  },
  {
    companyId: 'API',
    companyName: 'Agro Phos India'
  },
  {
    companyId: 'ATT',
    companyName: 'AGS Transact'
  },
  {
    companyId: 'ACI12',
    companyName: 'Ahluwalia'
  },
  {
    companyId: 'AIE01',
    companyName: 'AIA Engineering'
  },
  {
    companyId: 'AE20',
    companyName: 'AKG Exim'
  },
  {
    companyId: 'AO03',
    companyName: 'Aksh Optifibre'
  },
  {
    companyId: 'ASL',
    companyName: 'Akshar Spintex'
  },
  {
    companyId: 'AI29',
    companyName: 'AksharChem'
  },
  {
    companyId: 'ICI',
    companyName: 'Akzo Nobel'
  },
  {
    companyId: 'A08',
    companyName: 'Alembic'
  },
  {
    companyId: 'AP35',
    companyName: 'Alembic Pharma'
  },
  {
    companyId: 'AL05',
    companyName: 'Alkem Lab'
  },
  {
    companyId: 'AAC',
    companyName: 'Alkyl Amines'
  },
  {
    companyId: 'AGL02',
    companyName: 'Allcargo'
  },
  {
    companyId: 'ADS01',
    companyName: 'Allied Digital'
  },
  {
    companyId: 'AGS',
    companyName: 'Almondz Global'
  },
  {
    companyId: 'AI54',
    companyName: 'Alok Industries'
  },
  {
    companyId: 'AL11',
    companyName: 'Alpa Labs'
  },
  {
    companyId: 'AO',
    companyName: 'Ambani Organics'
  },
  {
    companyId: 'ACM04',
    companyName: 'Ambika Cotton'
  },
  {
    companyId: 'AC18',
    companyName: 'Ambuja Cements'
  },
  {
    companyId: 'ARTEM54291',
    companyName: 'AMSL'
  },
  {
    companyId: 'ARW',
    companyName: 'Anand Rathi'
  },
  {
    companyId: 'AS18',
    companyName: 'ANDHRSUGAR'
  },
  {
    companyId: 'ABL03',
    companyName: 'Angel One'
  },
  {
    companyId: 'AIS02',
    companyName: 'ANI Integrated '
  },
  {
    companyId: 'AI57',
    companyName: 'Anik Industries'
  },
  {
    companyId: 'APC',
    companyName: 'Anjani Portland'
  },
  {
    companyId: 'AS28',
    companyName: 'Annapurna Swa'
  },
  {
    companyId: 'AWH',
    companyName: 'Antony Waste'
  },
  {
    companyId: 'AI58',
    companyName: 'Apcotex Ind'
  },
  {
    companyId: 'AT14',
    companyName: 'Apollo Tyres'
  },
  {
    companyId: 'A11',
    companyName: 'Aptech'
  },
  {
    companyId: 'AVH',
    companyName: 'APTUS VALUE'
  },
  {
    companyId: 'AI',
    companyName: 'Archidply Ind'
  },
  {
    companyId: 'A15',
    companyName: 'Archies'
  },
  {
    companyId: 'AT25',
    companyName: 'ARHAM'
  },
  {
    companyId: 'AA02',
    companyName: 'Aries Agro'
  },
  {
    companyId: 'ACM02',
    companyName: 'Arihant Capital'
  },
  {
    companyId: 'ABL04',
    companyName: 'Aristo Bio-Tech'
  },
  {
    companyId: 'AFS04',
    companyName: 'Arman Financial'
  },
  {
    companyId: 'AGI01',
    companyName: 'Aro Granite'
  },
  {
    companyId: 'ACP',
    companyName: 'Arrow Greentech'
  },
  {
    companyId: 'A18',
    companyName: 'Arvind'
  },
  {
    companyId: 'AI72',
    companyName: 'Arvind Smart'
  },
  {
    companyId: 'AM07',
    companyName: 'Ashapura Mine'
  },
  {
    companyId: 'AH07',
    companyName: 'Ashiana Housing'
  },
  {
    companyId: 'AL',
    companyName: 'Ashok Leyland'
  },
  {
    companyId: 'AB',
    companyName: 'Ashoka Buildcon'
  },
  {
    companyId: 'AP31',
    companyName: 'Asian Paints'
  },
  {
    companyId: 'APT02',
    companyName: 'Astral Ltd'
  },
  {
    companyId: 'AZP',
    companyName: 'AstraZeneca'
  },
  {
    companyId: 'A9',
    companyName: 'Atlanta'
  },
  {
    companyId: 'A06',
    companyName: 'Atul'
  },
  {
    companyId: 'PS12',
    companyName: 'Aurionpro Solut'
  },
  {
    companyId: 'AP',
    companyName: 'Aurobindo Pharm'
  },
  {
    companyId: 'CE06',
    companyName: 'Ausom Enterp'
  },
  {
    companyId: 'AI59',
    companyName: 'Autoline Ind'
  },
  {
    companyId: 'AA06',
    companyName: 'Automotive Axle'
  },
  {
    companyId: 'AF21',
    companyName: 'Avanti Feeds'
  },
  {
    companyId: 'ALL02',
    companyName: 'AVG Logistics'
  },
  {
    companyId: 'AVT02',
    companyName: 'AVT Natural'
  },
  {
    companyId: 'AB16',
    companyName: 'Axis Bank'
  },
  {
    companyId: 'AXI',
    companyName: 'Axiscades Tech'
  },
  {
    companyId: 'AC29',
    companyName: 'Axita Cotton '
  },
  {
    companyId: 'AC29',
    companyName: 'Axita Cotton '
  },
  {
    companyId: 'PC13',
    companyName: 'B C Power Contr'
  },
  {
    companyId: 'BRI03',
    companyName: 'Baheti Recyclin'
  },
  {
    companyId: 'BC02',
    companyName: 'Bajaj Consumer '
  },
  {
    companyId: 'BE',
    companyName: 'Bajaj Electric'
  },
  {
    companyId: 'BHI',
    companyName: 'Bajaj Holdings'
  },
  {
    companyId: 'TAR',
    companyName: 'Balaxi Pharma'
  },
  {
    companyId: 'NPM01',
    companyName: 'Balkrishna '
  },
  {
    companyId: 'BI03',
    companyName: 'Balkrishna Ind'
  },
  {
    companyId: 'BLC',
    companyName: 'BALMLAWRIE'
  },
  {
    companyId: 'BCM',
    companyName: 'Balrampur Chini'
  },
  {
    companyId: 'BPI',
    companyName: 'Banco Products'
  },
  {
    companyId: 'BB09',
    companyName: 'Bandhan Bank'
  },
  {
    companyId: 'BO02',
    companyName: 'Bang Overseas'
  },
  {
    companyId: 'BNH',
    companyName: 'Barbeque Nat'
  },
  {
    companyId: 'BI01',
    companyName: 'Bata India'
  },
  {
    companyId: 'BC12',
    companyName: 'Bayer CropScien'
  },
  {
    companyId: 'MBF01',
    companyName: 'Bectors Food'
  },
  {
    companyId: 'BI05',
    companyName: 'Bedmutha Ind'
  },
  {
    companyId: 'BEM03',
    companyName: 'BEML'
  },
  {
    companyId: 'BPI02',
    companyName: 'Berger Paints'
  },
  {
    companyId: 'SCL11',
    companyName: 'Best Agrolife'
  },
  {
    companyId: 'BE10',
    companyName: 'BEW Eng.'
  },
  {
    companyId: 'BFI',
    companyName: 'BF Investment'
  },
  {
    companyId: 'BFU',
    companyName: 'BF Utilities'
  },
  {
    companyId: 'BES',
    companyName: 'BGR Energy'
  },
  {
    companyId: 'BI23',
    companyName: 'Bhagyanagar Ind'
  },
  {
    companyId: 'BHE02',
    companyName: 'Bhandari Hosier'
  },
  {
    companyId: 'BEP',
    companyName: 'Bhansali Eng'
  },
  {
    companyId: 'BE03',
    companyName: 'Bharat Elec'
  },
  {
    companyId: 'BF03',
    companyName: 'Bharat Forge'
  },
  {
    companyId: 'BRN',
    companyName: 'Bharat Road Net'
  },
  {
    companyId: 'BA08',
    companyName: 'Bharti Airtel'
  },
  {
    companyId: 'BHE',
    companyName: 'BHEL'
  },
  {
    companyId: 'BC19',
    companyName: 'Bigbloc Constru'
  },
  {
    companyId: 'BFI01',
    companyName: 'Bikaji Foods'
  },
  {
    companyId: 'BI10',
    companyName: 'Binani Ind'
  },
  {
    companyId: 'BEO',
    companyName: 'Birla Cable'
  },
  {
    companyId: 'BC07',
    companyName: 'Birla Corp'
  },
  {
    companyId: 'KPI02',
    companyName: 'Birlasoft'
  },
  {
    companyId: 'BLK',
    companyName: 'BL Kashyap'
  },
  {
    companyId: 'AGC',
    companyName: 'BLACK BOX'
  },
  {
    companyId: 'BDE',
    companyName: 'Blue Dart'
  },
  {
    companyId: 'BC15',
    companyName: 'Bodal Chemicals'
  },
  {
    companyId: 'BDM',
    companyName: 'BOMDYEING'
  },
  {
    companyId: 'BL04',
    companyName: 'Borosil Ltd.'
  },
  {
    companyId: 'B05',
    companyName: 'Bosch'
  },
  {
    companyId: 'BPC',
    companyName: 'BPCL'
  },
  {
    companyId: 'BE08',
    companyName: 'Brigade Ent'
  },
  {
    companyId: 'BI',
    companyName: 'Britannia'
  },
  {
    companyId: 'BL',
    companyName: 'Brooks Labs'
  },
  {
    companyId: 'B08',
    companyName: 'BSE Limited'
  },
  {
    companyId: 'GA',
    companyName: 'Butterfly'
  },
  {
    companyId: 'CIS02',
    companyName: 'C. E. Info Syst'
  },
  {
    companyId: 'CTE',
    companyName: 'Cambridge Tech'
  },
  {
    companyId: 'CFC03',
    companyName: 'Camlin Fine'
  },
  {
    companyId: 'CA07',
    companyName: 'Campus Active'
  },
  {
    companyId: 'CAM',
    companyName: 'CAMS'
  },
  {
    companyId: 'CFH',
    companyName: 'Can Fin Homes'
  },
  {
    companyId: 'CB06',
    companyName: 'Canara Bank'
  },
  {
    companyId: 'CRI01',
    companyName: 'Cantabil Retail'
  },
  {
    companyId: 'CT',
    companyName: 'Capital Trust'
  },
  {
    companyId: 'MMF05',
    companyName: 'Capri Global'
  },
  {
    companyId: 'CU',
    companyName: 'Carborundum'
  },
  {
    companyId: 'CAR',
    companyName: 'CARE Ratings'
  },
  {
    companyId: 'CPI05',
    companyName: 'Career Point'
  },
  {
    companyId: 'AI04',
    companyName: 'Carysil'
  },
  {
    companyId: 'CI01',
    companyName: 'Castrol'
  },
  {
    companyId: 'CC10',
    companyName: 'CCL Products'
  },
  {
    companyId: 'CDS',
    companyName: 'CDSL'
  },
  {
    companyId: 'CFL04',
    companyName: 'Celebrity Fash'
  },
  {
    companyId: 'CBO01',
    companyName: 'Central Bank'
  },
  {
    companyId: 'CF09',
    companyName: 'Centrum Capital'
  },
  {
    companyId: 'CE10',
    companyName: 'Centum Electron'
  },
  {
    companyId: 'CTI',
    companyName: 'Century'
  },
  {
    companyId: 'CE02',
    companyName: 'Century Extr'
  },
  {
    companyId: 'CP9',
    companyName: 'CenturyPlyboard'
  },
  {
    companyId: 'CES',
    companyName: 'CESC'
  },
  {
    companyId: 'CG',
    companyName: 'CG Power '
  },
  {
    companyId: 'CH03',
    companyName: 'Chalet Hotels'
  },
  {
    companyId: 'CM06',
    companyName: 'Chaman Metallic'
  },
  {
    companyId: 'CFC',
    companyName: 'Chambal Fert'
  },
  {
    companyId: 'CSC',
    companyName: 'Chemcon Special'
  },
  {
    companyId: 'CA01',
    companyName: 'Chemfab Alkalis'
  },
  {
    companyId: 'CS23',
    companyName: 'CHEMPLAST SANMA'
  },
  {
    companyId: 'CPC02',
    companyName: 'Chennai Petro'
  },
  {
    companyId: 'CC04',
    companyName: 'Cheviot Company'
  },
  {
    companyId: 'CFS01',
    companyName: 'Choice Internat'
  },
  {
    companyId: 'TII',
    companyName: 'Chola Fin Hold'
  },
  {
    companyId: 'CI42',
    companyName: 'Cigniti Tech'
  },
  {
    companyId: 'CI38',
    companyName: 'Cineline India'
  },
  {
    companyId: 'C',
    companyName: 'Cipla'
  },
  {
    companyId: 'CI23',
    companyName: 'CMM Infraprojec'
  },
  {
    companyId: 'CS',
    companyName: 'Cochin Shipyard'
  },
  {
    companyId: 'CDE',
    companyName: 'Coffee Day'
  },
  {
    companyId: 'NII02',
    companyName: 'COFORGE LTD.'
  },
  {
    companyId: 'CPI',
    companyName: 'Colgate'
  },
  {
    companyId: 'CI29',
    companyName: 'Compuage Info'
  },
  {
    companyId: 'CS14',
    companyName: 'Compucom Soft'
  },
  {
    companyId: 'CP10',
    companyName: 'ConfidencePetro'
  },
  {
    companyId: 'CCI',
    companyName: 'Container Corp'
  },
  {
    companyId: 'CSA',
    companyName: 'Continental See'
  },
  {
    companyId: 'CIF02',
    companyName: 'Coral India Fin'
  },
  {
    companyId: 'CCI07',
    companyName: 'Cords Cable Ind'
  },
  {
    companyId: 'CI45',
    companyName: 'Coromandel Int'
  },
  {
    companyId: 'CCI06',
    companyName: 'Country Club'
  },
  {
    companyId: 'CA04',
    companyName: 'Craftsman'
  },
  {
    companyId: 'CRI',
    companyName: 'CRISIL'
  },
  {
    companyId: 'CB05',
    companyName: 'CSB Bank'
  },
  {
    companyId: 'CI02',
    companyName: 'Cummins'
  },
  {
    companyId: 'CSS',
    companyName: 'Cybertech'
  },
  {
    companyId: 'IE07',
    companyName: 'Cyient'
  },
  {
    companyId: 'DI',
    companyName: 'Dabur India'
  },
  {
    companyId: 'OCL',
    companyName: 'Dalmia Bharat'
  },
  {
    companyId: 'DCB',
    companyName: 'Dalmia Sugar'
  },
  {
    companyId: 'DGS01',
    companyName: 'Datamatics Glob'
  },
  {
    companyId: 'DBI',
    companyName: 'DB (Int) Stock'
  },
  {
    companyId: 'C13',
    companyName: 'DB Corp'
  },
  {
    companyId: 'DCB01',
    companyName: 'DCB Bank'
  },
  {
    companyId: 'DCM',
    companyName: 'DCM'
  },
  {
    companyId: 'DCM02',
    companyName: 'DCM Shriram'
  },
  {
    companyId: 'DI24',
    companyName: 'Deep Energy Res'
  },
  {
    companyId: 'DI02',
    companyName: 'Deep Ind'
  },
  {
    companyId: 'DI02',
    companyName: 'Deep Ind'
  },
  {
    companyId: 'DN',
    companyName: 'Deepak Nitrite'
  },
  {
    companyId: 'D06',
    companyName: 'Delhivery'
  },
  {
    companyId: 'DM04',
    companyName: 'Delta'
  },
  {
    companyId: 'DC11',
    companyName: 'Delta Corp'
  },
  {
    companyId: 'DN02',
    companyName: 'Den Networks'
  },
  {
    companyId: 'DSM',
    companyName: 'Dhampur Sugar'
  },
  {
    companyId: 'DA01',
    companyName: 'Dhanuka Agritec'
  },
  {
    companyId: 'DI27',
    companyName: 'Dhunseri Invest'
  },
  {
    companyId: 'DTI',
    companyName: 'Dhunseri Ventur'
  },
  {
    companyId: 'S13',
    companyName: 'Digispice Tech'
  },
  {
    companyId: 'D05',
    companyName: 'Digjam'
  },
  {
    companyId: 'DB04',
    companyName: 'Dilip Buildcon'
  },
  {
    companyId: 'DTV',
    companyName: 'Dish TV'
  },
  {
    companyId: 'DTS',
    companyName: 'Divgi Torqtrans'
  },
  {
    companyId: 'DML03',
    companyName: 'DJ Mediaprint'
  },
  {
    companyId: 'D04',
    companyName: 'DLF'
  },
  {
    companyId: 'DI25',
    companyName: 'Donear Ind'
  },
  {
    companyId: 'DPS',
    companyName: 'DPSC'
  },
  {
    companyId: 'DRL',
    companyName: 'Dr Reddys Labs'
  },
  {
    companyId: 'DSI02',
    companyName: 'DRC Systems'
  },
  {
    companyId: 'DS09',
    companyName: 'Dreamfolks Serv'
  },
  {
    companyId: 'DCI',
    companyName: 'Dredging Corp'
  },
  {
    companyId: 'DT9',
    companyName: 'Ducon Infratech'
  },
  {
    companyId: 'DSI01',
    companyName: 'Dwarikesh Sugar'
  },
  {
    companyId: 'DC13',
    companyName: 'Dynamic Cables'
  },
  {
    companyId: 'DSS05',
    companyName: 'Dynamic Service'
  },
  {
    companyId: 'ETP01',
    companyName: 'Easy Trip'
  },
  {
    companyId: 'ETP01',
    companyName: 'Easy Trip'
  },
  {
    companyId: 'eS06',
    companyName: 'eClerx Services'
  },
  {
    companyId: 'EC01',
    companyName: 'Edelweiss'
  },
  {
    companyId: 'ES8',
    companyName: 'Educomp Sol'
  },
  {
    companyId: 'EM',
    companyName: 'Eicher Motors'
  },
  {
    companyId: 'EID',
    companyName: 'EID Parry'
  },
  {
    companyId: 'EIH',
    companyName: 'EIH'
  },
  {
    companyId: 'EIH01',
    companyName: 'EIH Assoc Hotel'
  },
  {
    companyId: 'EMI',
    companyName: 'Electronics Mar'
  },
  {
    companyId: 'EI02',
    companyName: 'Electrotherm'
  },
  {
    companyId: 'EE07',
    companyName: 'Elin Electronic'
  },
  {
    companyId: 'E06',
    companyName: 'Emami'
  },
  {
    companyId: 'EI23',
    companyName: 'Emami Realty '
  },
  {
    companyId: 'EOP',
    companyName: 'Embassy Office'
  },
  {
    companyId: 'EP09',
    companyName: 'Emmbi Ind'
  },
  {
    companyId: 'ET01',
    companyName: 'Endurance Techn'
  },
  {
    companyId: 'EI14',
    companyName: 'Engineers India'
  },
  {
    companyId: 'EP11',
    companyName: 'EPL'
  },
  {
    companyId: 'EL01',
    companyName: 'Eris Life'
  },
  {
    companyId: 'EI06',
    companyName: 'Esab India'
  },
  {
    companyId: 'E',
    companyName: 'Escorts Kubota'
  },
  {
    companyId: 'EI20',
    companyName: 'Ester Ind'
  },
  {
    companyId: 'EIF',
    companyName: 'Euro India Fres'
  },
  {
    companyId: 'EI',
    companyName: 'Exide Ind'
  },
  {
    companyId: 'TGS01',
    companyName: 'Expleo Solution'
  },
  {
    companyId: 'FO01',
    companyName: 'Fairchem Org.'
  },
  {
    companyId: 'FB',
    companyName: 'Federal Bank'
  },
  {
    companyId: 'FCT',
    companyName: 'Fert and Chem'
  },
  {
    companyId: 'PVD',
    companyName: 'Fiberweb India'
  },
  {
    companyId: 'FIE',
    companyName: 'FIEM Ind'
  },
  {
    companyId: 'FI06',
    companyName: 'Filatex India'
  },
  {
    companyId: 'FI06',
    companyName: 'Filatex India'
  },
  {
    companyId: 'FC02',
    companyName: 'Fineotex Chem'
  },
  {
    companyId: 'FC01',
    companyName: 'Finolex Cables'
  },
  {
    companyId: 'FI21',
    companyName: 'Foce India'
  },
  {
    companyId: 'FVI',
    companyName: 'Future Consumer'
  },
  {
    companyId: 'AD04',
    companyName: 'Future Market'
  },
  {
    companyId: 'GI02',
    companyName: 'Gabriel India'
  },
  {
    companyId: 'GAI',
    companyName: 'GAIL'
  },
  {
    companyId: 'GSL06',
    companyName: 'Galaxy Surfacta'
  },
  {
    companyId: 'GWR',
    companyName: 'Garware Technic'
  },
  {
    companyId: 'G04',
    companyName: 'Gati'
  },
  {
    companyId: 'GES',
    companyName: 'GE Shipping'
  },
  {
    companyId: 'ATD',
    companyName: 'GE T&D India'
  },
  {
    companyId: 'GCI05',
    companyName: 'GeeCee Ventures'
  },
  {
    companyId: 'GIC12',
    companyName: 'General Insuran'
  },
  {
    companyId: 'GBN01',
    companyName: 'Geojit Fin'
  },
  {
    companyId: 'GIE01',
    companyName: 'GI Engineering'
  },
  {
    companyId: 'GIC',
    companyName: 'GIC Housing Fin'
  },
  {
    companyId: 'GI22',
    companyName: 'Gillette India'
  },
  {
    companyId: 'GP14',
    companyName: 'Gland'
  },
  {
    companyId: 'GP08',
    companyName: 'Glenmark'
  },
  {
    companyId: 'GE02',
    companyName: 'Global Educatio'
  },
  {
    companyId: 'GE02',
    companyName: 'Global Educatio'
  },
  {
    companyId: 'GH03',
    companyName: 'Global Health'
  },
  {
    companyId: 'GS17',
    companyName: 'Global Surfaces'
  },
  {
    companyId: 'GS',
    companyName: 'Globus Spirits'
  },
  {
    companyId: 'GMM01',
    companyName: 'GMM Pfaudler'
  },
  {
    companyId: 'A03',
    companyName: 'GNA Axles'
  },
  {
    companyId: 'GFI04',
    companyName: 'Go Fashion'
  },
  {
    companyId: 'GPI',
    companyName: 'Godfrey Phillip'
  },
  {
    companyId: 'GA03',
    companyName: 'Godrej Agrovet'
  },
  {
    companyId: 'GCP',
    companyName: 'Godrej Consumer'
  },
  {
    companyId: 'GI23',
    companyName: 'Godrej Ind'
  },
  {
    companyId: 'GP11',
    companyName: 'Godrej Prop'
  },
  {
    companyId: 'GE05',
    companyName: 'Gokaldas Export'
  },
  {
    companyId: 'GAR',
    companyName: 'Gokul Agro'
  },
  {
    companyId: 'GRS',
    companyName: 'Gokul Refoils'
  },
  {
    companyId: 'GI10',
    companyName: 'Goldiam Inter'
  },
  {
    companyId: 'GT04',
    companyName: 'Goldstone Tech'
  },
  {
    companyId: 'GI11',
    companyName: 'Goodyear'
  },
  {
    companyId: 'ATI',
    companyName: 'Goyal Aluminium'
  },
  {
    companyId: 'ATI',
    companyName: 'Goyal Aluminium'
  },
  {
    companyId: 'GPT01',
    companyName: 'GPT Infra'
  },
  {
    companyId: 'GI25',
    companyName: 'Granules India'
  },
  {
    companyId: 'GI01',
    companyName: 'Grasim'
  },
  {
    companyId: 'GWI',
    companyName: 'Grauer and Weil'
  },
  {
    companyId: 'GI09',
    companyName: 'Gravita India'
  },
  {
    companyId: 'GC20',
    companyName: 'Greaves Cotton'
  },
  {
    companyId: 'GI33',
    companyName: 'Gretex Industri'
  },
  {
    companyId: 'GN',
    companyName: 'Grindwell Norto'
  },
  {
    companyId: 'GRR',
    companyName: 'GRP'
  },
  {
    companyId: 'GAI05',
    companyName: 'GSS Infotech'
  },
  {
    companyId: 'GAE',
    companyName: 'Guj Amb Exports'
  },
  {
    companyId: 'GHC',
    companyName: 'Guj Heavy Chem'
  },
  {
    companyId: 'GAI03',
    companyName: 'Gujarat Apollo'
  },
  {
    companyId: 'GUJAR54281',
    companyName: 'Gujarat Fluoro'
  },
  {
    companyId: 'GGC',
    companyName: 'Gujarat Gas'
  },
  {
    companyId: 'GOL01',
    companyName: 'Gulf Oil Lubric'
  },
  {
    companyId: 'GA01',
    companyName: 'Gyscoal Alloys'
  },
  {
    companyId: 'HMT01',
    companyName: 'Happiest Minds '
  },
  {
    companyId: 'GI34',
    companyName: 'Hardwyn'
  },
  {
    companyId: 'HPI02',
    companyName: 'Hariom Pipe'
  },
  {
    companyId: 'HAP',
    companyName: 'Hatsun Agro'
  },
  {
    companyId: 'HI01',
    companyName: 'Havells India'
  },
  {
    companyId: 'HCL',
    companyName: 'HCL Info'
  },
  {
    companyId: 'HCL02',
    companyName: 'HCL Tech'
  },
  {
    companyId: 'HDF',
    companyName: 'HDFC'
  },
  {
    companyId: 'HDF01',
    companyName: 'HDFC Bank'
  },
  {
    companyId: 'HSL01',
    companyName: 'HDFC Life'
  },
  {
    companyId: 'TMR',
    companyName: 'Heads UP Vent'
  },
  {
    companyId: 'HGE',
    companyName: 'Healthcare Glob'
  },
  {
    companyId: 'HPI01',
    companyName: 'Hemisphere'
  },
  {
    companyId: 'HHM',
    companyName: 'Hero Motocorp'
  },
  {
    companyId: 'HB01',
    companyName: 'Hester Bio'
  },
  {
    companyId: 'HT03',
    companyName: 'Hexa Tradex'
  },
  {
    companyId: 'HFC',
    companyName: 'HFCL'
  },
  {
    companyId: 'H05',
    companyName: 'Hikal'
  },
  {
    companyId: 'HMF',
    companyName: 'Hilton Metal'
  },
  {
    companyId: 'HCI01',
    companyName: 'Himadri Special'
  },
  {
    companyId: 'HS',
    companyName: 'Himatsingka Sei'
  },
  {
    companyId: 'HC06',
    companyName: 'Hind Composites'
  },
  {
    companyId: 'HCC',
    companyName: 'Hind Constr'
  },
  {
    companyId: 'HPC',
    companyName: 'HINDPETRO'
  },
  {
    companyId: 'HAL',
    companyName: 'Hindustan Aeron'
  },
  {
    companyId: 'SHIL54290',
    companyName: 'HINDWAREAP'
  },
  {
    companyId: 'APP03',
    companyName: 'Hitachi Energy'
  },
  {
    companyId: 'HOE01',
    companyName: 'HOEC'
  },
  {
    companyId: 'HFF',
    companyName: 'Home First'
  },
  {
    companyId: 'HR04',
    companyName: 'Homesfy Realty'
  },
  {
    companyId: 'HSP02',
    companyName: 'Honda India PP'
  },
  {
    companyId: 'HOV',
    companyName: 'HOV Services'
  },
  {
    companyId: 'HEP',
    companyName: 'HPL Electric & '
  },
  {
    companyId: 'HUD',
    companyName: 'HUDCO'
  },
  {
    companyId: 'PP',
    companyName: 'Huhtamaki India'
  },
  {
    companyId: 'HU',
    companyName: 'HUL'
  },
  {
    companyId: 'IMR',
    companyName: 'ICE Make Refrig'
  },
  {
    companyId: 'ICI02',
    companyName: 'ICICI Bank'
  },
  {
    companyId: 'IDB05',
    companyName: 'IDBI Bank'
  },
  {
    companyId: 'IDF',
    companyName: 'IDFC'
  },
  {
    companyId: 'IDF01',
    companyName: 'IDFC First Bank'
  },
  {
    companyId: 'IFB',
    companyName: 'IFB Agro'
  },
  {
    companyId: 'IFG',
    companyName: 'IFGL Refractory'
  },
  {
    companyId: 'II15',
    companyName: 'IIFL Finance'
  },
  {
    companyId: 'ITN',
    companyName: 'ILandFS Trans'
  },
  {
    companyId: 'IFT',
    companyName: 'Impex FerroTech'
  },
  {
    companyId: 'IS02',
    companyName: 'Ind-Swift'
  },
  {
    companyId: 'IG',
    companyName: 'India Glycols'
  },
  {
    companyId: 'INE',
    companyName: 'India Nippon'
  },
  {
    companyId: 'IP10',
    companyName: 'India Pesticide'
  },
  {
    companyId: 'ITD02',
    companyName: 'India Tourism D'
  },
  {
    companyId: 'IHF01',
    companyName: 'Indiabulls Hsg'
  },
  {
    companyId: 'IRE01',
    companyName: 'Indiabulls Real'
  },
  {
    companyId: 'IB04',
    companyName: 'Indian Bank'
  },
  {
    companyId: 'ICC01',
    companyName: 'Indian Card'
  },
  {
    companyId: 'IHC',
    companyName: 'Indian Hotels'
  },
  {
    companyId: 'IHP',
    companyName: 'Indian Hume'
  },
  {
    companyId: 'IBC',
    companyName: 'Indo Borax'
  },
  {
    companyId: 'ICI07',
    companyName: 'Indo Count'
  },
  {
    companyId: 'ITT02',
    companyName: 'Indo Tech Trans'
  },
  {
    companyId: 'ITS',
    companyName: 'Indo Thai Secu'
  },
  {
    companyId: 'IR05',
    companyName: 'Indoco Remedies'
  },
  {
    companyId: 'IE08',
    companyName: 'Indowind Energy'
  },
  {
    companyId: 'BI14',
    companyName: 'INDUS TOWERS'
  },
  {
    companyId: 'IIB',
    companyName: 'IndusInd Bank'
  },
  {
    companyId: 'IT05',
    companyName: 'InfoBeans Tech'
  },
  {
    companyId: 'IT',
    companyName: 'Infosys'
  },
  {
    companyId: 'IGT',
    companyName: 'Integra Essenti'
  },
  {
    companyId: 'FI17',
    companyName: 'Intense Tech'
  },
  {
    companyId: 'IA04',
    companyName: 'Interglobe Avi'
  },
  {
    companyId: 'IT04',
    companyName: 'Intrasoft Tech'
  },
  {
    companyId: 'IOB',
    companyName: 'IOB'
  },
  {
    companyId: 'IOL01',
    companyName: 'IOL Chemicals'
  },
  {
    companyId: 'II04',
    companyName: 'IRB InvIT'
  },
  {
    companyId: 'II07',
    companyName: 'Ircon Internati'
  },
  {
    companyId: 'II07',
    companyName: 'Ircon Internati'
  },
  {
    companyId: 'IRC',
    companyName: 'IRCTC'
  },
  {
    companyId: 'IBS01',
    companyName: 'IRIS Business S'
  },
  {
    companyId: 'SIS06',
    companyName: 'ISGEC Heavy Eng'
  },
  {
    companyId: 'II14',
    companyName: 'Ishan Intl.'
  },
  {
    companyId: 'ITC',
    companyName: 'ITC'
  },
  {
    companyId: 'ITI',
    companyName: 'ITI'
  },
  {
    companyId: 'IVP',
    companyName: 'IVP'
  },
  {
    companyId: 'LM02',
    companyName: 'IZMO'
  },
  {
    companyId: 'KI01',
    companyName: 'J Kumar Infra'
  },
  {
    companyId: 'JKC03',
    companyName: 'J. K. Cement'
  },
  {
    companyId: 'JA02',
    companyName: 'Jaiprakash Asso'
  },
  {
    companyId: 'JT03',
    companyName: 'Jalan Transolut'
  },
  {
    companyId: 'JE04',
    companyName: 'Jash Engineerin'
  },
  {
    companyId: 'JAO',
    companyName: 'Jayant Agro-Org'
  },
  {
    companyId: 'JTI',
    companyName: 'Jayshree Tea'
  },
  {
    companyId: 'JBC01',
    companyName: 'JB Chemicals'
  },
  {
    companyId: 'JSL02',
    companyName: 'Jeena Sikho'
  },
  {
    companyId: 'JHS01',
    companyName: 'JHS Svendgaard'
  },
  {
    companyId: 'JP11',
    companyName: 'Jindal Photo'
  },
  {
    companyId: 'JPI02',
    companyName: 'Jindal Poly Inv'
  },
  {
    companyId: 'JPF01',
    companyName: 'Jindal PolyFilm'
  },
  {
    companyId: 'JS08',
    companyName: 'Jindal Saw'
  },
  {
    companyId: 'JSL01',
    companyName: 'Jindal Stainles'
  },
  {
    companyId: 'JKB',
    companyName: 'JK Bank'
  },
  {
    companyId: 'JKP01',
    companyName: 'JK Paper'
  },
  {
    companyId: 'JKT01',
    companyName: 'JK Tyre & Ind'
  },
  {
    companyId: 'J01',
    companyName: 'Jocil'
  },
  {
    companyId: 'MI16',
    companyName: 'JSW Ispat Speci'
  },
  {
    companyId: 'SKS04',
    companyName: 'JTEKT India '
  },
  {
    companyId: 'JTL01',
    companyName: 'JTL Ind.'
  },
  {
    companyId: 'JI10',
    companyName: 'Jubilant Ind'
  },
  {
    companyId: 'JI14',
    companyName: 'Jubilant Ing.'
  },
  {
    companyId: 'JO03',
    companyName: 'Jubilant Pharmo'
  },
  {
    companyId: 'JS03',
    companyName: 'Jyoti Structure'
  },
  {
    companyId: 'KET',
    companyName: 'Kabra Extrusion'
  },
  {
    companyId: 'KC06',
    companyName: 'Kajaria Ceramic'
  },
  {
    companyId: 'KC01',
    companyName: 'Kakatiya Cement'
  },
  {
    companyId: 'KHI',
    companyName: 'Kamat Hotels'
  },
  {
    companyId: 'KI24',
    companyName: 'Kamdhenu'
  },
  {
    companyId: 'KI26',
    companyName: 'Kanani Ind'
  },
  {
    companyId: 'KCI01',
    companyName: 'Kanoria Chem'
  },
  {
    companyId: 'KFM',
    companyName: 'Kapston Service'
  },
  {
    companyId: 'KSC01',
    companyName: 'Kaveri Seed'
  },
  {
    companyId: 'K03',
    companyName: 'Kaya'
  },
  {
    companyId: 'KTI',
    companyName: 'Kaynes Tech'
  },
  {
    companyId: 'KC19',
    companyName: 'KBC Global'
  },
  {
    companyId: 'KCP01',
    companyName: 'KCP Sugar'
  },
  {
    companyId: 'KDD',
    companyName: 'KDDL'
  },
  {
    companyId: 'VMF',
    companyName: 'Kellton Tech'
  },
  {
    companyId: 'WI06',
    companyName: 'Kennametal'
  },
  {
    companyId: 'KMI',
    companyName: 'Kernex Micro'
  },
  {
    companyId: 'KI08',
    companyName: 'Kesoram'
  },
  {
    companyId: 'KKC02',
    companyName: 'Kewal Kiran'
  },
  {
    companyId: 'KCS',
    companyName: 'Keynote Finance'
  },
  {
    companyId: 'KT07',
    companyName: 'KFin Tech'
  },
  {
    companyId: 'KIL',
    companyName: 'Khadim India'
  },
  {
    companyId: 'KCF',
    companyName: 'Khaitan Chemica'
  },
  {
    companyId: 'KDI',
    companyName: 'Kilitch Drugs'
  },
  {
    companyId: 'HSS',
    companyName: 'Kingfa Science'
  },
  {
    companyId: 'KIO',
    companyName: 'KIOCL'
  },
  {
    companyId: 'KOE',
    companyName: 'Kirloskar Ind'
  },
  {
    companyId: 'KOE03',
    companyName: 'Kirloskar Oil'
  },
  {
    companyId: 'KF15',
    companyName: 'Kohinoor Foods'
  },
  {
    companyId: 'K01',
    companyName: 'Kopran'
  },
  {
    companyId: 'KP06',
    companyName: 'Kothari Product'
  },
  {
    companyId: 'KSC',
    companyName: 'Kothari Sugars'
  },
  {
    companyId: 'KI10',
    companyName: 'Kotyark Ind'
  },
  {
    companyId: 'KPIGL54232',
    companyName: 'KPIGREEN'
  },
  {
    companyId: 'M15',
    companyName: 'KPR Mill'
  },
  {
    companyId: 'KP11',
    companyName: 'Krishana Phosch'
  },
  {
    companyId: 'KDA',
    companyName: 'Krishna Defence'
  },
  {
    companyId: 'LFH',
    companyName: 'L&T Finance'
  },
  {
    companyId: 'LTS',
    companyName: 'L&T Technology'
  },
  {
    companyId: 'LOR',
    companyName: 'La Opala RG'
  },
  {
    companyId: 'LS01',
    companyName: 'Lagnam Spintex '
  },
  {
    companyId: 'LFI01',
    companyName: 'Lakshmi Finance'
  },
  {
    companyId: 'LPS',
    companyName: 'Lakshmi Prec'
  },
  {
    companyId: 'LT',
    companyName: 'Larsen'
  },
  {
    companyId: 'LVA',
    companyName: 'Latent View'
  },
  {
    companyId: 'LL05',
    companyName: 'Laurus Labs'
  },
  {
    companyId: 'LRR',
    companyName: 'Lead Reclaim'
  },
  {
    companyId: 'LG',
    companyName: 'Lexus Granito'
  },
  {
    companyId: 'LGB01',
    companyName: 'LGB Forge'
  },
  {
    companyId: 'LD03',
    companyName: 'Libas Consumer'
  },
  {
    companyId: 'LIC',
    companyName: 'LIC Housing Fin'
  },
  {
    companyId: 'LP06',
    companyName: 'Lincoln Pharma'
  },
  {
    companyId: 'BOC',
    companyName: 'Linde India'
  },
  {
    companyId: 'LA01',
    companyName: 'Lorenzini Appar'
  },
  {
    companyId: 'LL04',
    companyName: 'Lovable Lingeri'
  },
  {
    companyId: 'LTM',
    companyName: 'Loyal Textiles'
  },
  {
    companyId: 'LTF',
    companyName: 'LT Foods'
  },
  {
    companyId: 'LAT01',
    companyName: 'Lumax Auto Tech'
  },
  {
    companyId: 'LI05',
    companyName: 'Lumax Inds'
  },
  {
    companyId: 'L',
    companyName: 'Lupin'
  },
  {
    companyId: 'LHI',
    companyName: 'Lux Industries'
  },
  {
    companyId: 'P09',
    companyName: 'M K Proteins'
  },
  {
    companyId: 'MM',
    companyName: 'M&M'
  },
  {
    companyId: 'MMF04',
    companyName: 'M&M Financial'
  },
  {
    companyId: 'MD03',
    companyName: 'Macrotech Dev'
  },
  {
    companyId: 'MC07',
    companyName: 'Madhav Copper'
  },
  {
    companyId: 'MMG',
    companyName: 'Madhav Marbles'
  },
  {
    companyId: 'MBA',
    companyName: 'Madhya Bharat A'
  },
  {
    companyId: 'MS01',
    companyName: 'Mah Scooters'
  },
  {
    companyId: 'MS02',
    companyName: 'Mah Seamless'
  },
  {
    companyId: 'MSI11',
    companyName: 'Mahamaya Steel'
  },
  {
    companyId: 'MG02',
    companyName: 'Mahanagar Gas'
  },
  {
    companyId: 'ML04',
    companyName: 'Mahindra Logist'
  },
  {
    companyId: 'MA04',
    companyName: 'Maithan Alloys'
  },
  {
    companyId: 'MI37',
    companyName: 'Man Infra'
  },
  {
    companyId: 'M16',
    companyName: 'Manaksia'
  },
  {
    companyId: 'MAC03',
    companyName: 'Manaksia Alumin'
  },
  {
    companyId: 'MS27',
    companyName: 'Manaksia Steels'
  },
  {
    companyId: 'MGF01',
    companyName: 'Manappuram Fin'
  },
  {
    companyId: 'MC03',
    companyName: 'Mangalam Cement'
  },
  {
    companyId: 'MDO',
    companyName: 'Mangalam Drugs'
  },
  {
    companyId: 'DP06',
    companyName: 'Mangalam Organ'
  },
  {
    companyId: 'MW01',
    companyName: 'Mangalam World'
  },
  {
    companyId: 'M13',
    companyName: 'Marico'
  },
  {
    companyId: 'ME21',
    companyName: 'Marine Electric'
  },
  {
    companyId: 'MP21',
    companyName: 'Marksans Pharma'
  },
  {
    companyId: 'MM04',
    companyName: 'Marshall Machin'
  },
  {
    companyId: 'MS24',
    companyName: 'Maruti Suzuki'
  },
  {
    companyId: 'MHI',
    companyName: 'Max Healthcare'
  },
  {
    companyId: 'MU',
    companyName: 'Mayur Uniquoter'
  },
  {
    companyId: 'MDS01',
    companyName: 'Mazagon Dock'
  },
  {
    companyId: 'M14',
    companyName: 'Mazda'
  },
  {
    companyId: 'MI34',
    companyName: 'Melstar Info'
  },
  {
    companyId: 'MB01',
    companyName: 'Menon Bearings'
  },
  {
    companyId: 'MB06',
    companyName: 'Metro Brands'
  },
  {
    companyId: 'MBP02',
    companyName: 'Mindspace REIT'
  },
  {
    companyId: 'MI46',
    companyName: 'Mirza Intl'
  },
  {
    companyId: 'MDN',
    companyName: 'Mishra Dhatu Ni'
  },
  {
    companyId: 'MCE01',
    companyName: 'Mitcon Cons'
  },
  {
    companyId: 'MLS',
    companyName: 'Mittal Life Sty'
  },
  {
    companyId: 'MMF',
    companyName: 'MM Forgings'
  },
  {
    companyId: 'MM07',
    companyName: 'Modison'
  },
  {
    companyId: 'MHH',
    companyName: 'Mohini Health &'
  },
  {
    companyId: 'MI36',
    companyName: 'Mohit Ind'
  },
  {
    companyId: 'M18',
    companyName: 'MOIL'
  },
  {
    companyId: 'MC05',
    companyName: 'Monte Carlo'
  },
  {
    companyId: 'ML06',
    companyName: 'Morepen Lab'
  },
  {
    companyId: 'MU03',
    companyName: 'MOS Utility'
  },
  {
    companyId: 'MSS01',
    companyName: 'MOTHERSON'
  },
  {
    companyId: 'MSW',
    companyName: 'Motherson SWI'
  },
  {
    companyId: 'MGF',
    companyName: 'Motor and Gen F'
  },
  {
    companyId: 'MB02',
    companyName: 'MphasiS'
  },
  {
    companyId: 'MI31',
    companyName: 'MPS'
  },
  {
    companyId: 'MRF',
    companyName: 'MRF'
  },
  {
    companyId: 'MRP',
    companyName: 'MRPL'
  },
  {
    companyId: 'M21',
    companyName: 'MSTC'
  },
  {
    companyId: 'MTN',
    companyName: 'MTNL'
  },
  {
    companyId: 'M02',
    companyName: 'Mukand'
  },
  {
    companyId: 'MAI04',
    companyName: 'Munjal Auto Ind'
  },
  {
    companyId: 'MC13',
    companyName: 'Murudeshwar Cer'
  },
  {
    companyId: 'MCS02',
    companyName: 'Muthoot Cap'
  },
  {
    companyId: 'MF10',
    companyName: 'Muthoot Finance'
  },
  {
    companyId: 'NCI',
    companyName: 'Nagreeka Cap'
  },
  {
    companyId: 'NCF',
    companyName: 'Nahar Capital'
  },
  {
    companyId: 'NIE',
    companyName: 'Nahar Ent'
  },
  {
    companyId: 'NIH',
    companyName: 'Nahar Poly Film'
  },
  {
    companyId: 'NAC',
    companyName: 'NALCO'
  },
  {
    companyId: 'NSI02',
    companyName: 'Nalwa Sons'
  },
  {
    companyId: 'NC09',
    companyName: 'Nandani Creatio'
  },
  {
    companyId: 'NA',
    companyName: 'Narmada Agrobas'
  },
  {
    companyId: 'NBG',
    companyName: 'Nath Bio-Genes'
  },
  {
    companyId: 'NSA02',
    companyName: 'National Steel'
  },
  {
    companyId: 'NBV',
    companyName: 'NAVA'
  },
  {
    companyId: 'NC02',
    companyName: 'Navkar Corp'
  },
  {
    companyId: 'NP01',
    companyName: 'Navneet'
  },
  {
    companyId: 'NT',
    companyName: 'Nazara'
  },
  {
    companyId: 'NBC01',
    companyName: 'NBCC (India)'
  },
  {
    companyId: 'NBI02',
    companyName: 'NBI Industrial'
  },
  {
    companyId: 'NCC01',
    companyName: 'NCC'
  },
  {
    companyId: 'NAC02',
    companyName: 'Ndr Auto Compon'
  },
  {
    companyId: 'NL01',
    companyName: 'Nectar Life'
  },
  {
    companyId: 'N06',
    companyName: 'Nelcast'
  },
  {
    companyId: 'NEL',
    companyName: 'NELCO'
  },
  {
    companyId: 'NES',
    companyName: 'NESCO'
  },
  {
    companyId: 'NI',
    companyName: 'Nestle'
  },
  {
    companyId: 'NMI',
    companyName: 'Network 18'
  },
  {
    companyId: 'NPS02',
    companyName: 'Network People'
  },
  {
    companyId: 'NL',
    companyName: 'Neuland Lab'
  },
  {
    companyId: 'NIA',
    companyName: 'New India Assur'
  },
  {
    companyId: 'NST01',
    companyName: 'Newgen Software'
  },
  {
    companyId: 'NF06',
    companyName: 'NFL'
  },
  {
    companyId: 'NII',
    companyName: 'NIIT'
  },
  {
    companyId: 'NHI',
    companyName: 'Nila Infra'
  },
  {
    companyId: 'RNL',
    companyName: 'Nippon'
  },
  {
    companyId: 'NCS02',
    companyName: 'Niraj Cement'
  },
  {
    companyId: 'N52',
    companyName: 'Nitco'
  },
  {
    companyId: 'NLC',
    companyName: 'NLC India'
  },
  {
    companyId: 'NS15',
    companyName: 'NMDC Steel'
  },
  {
    companyId: 'NRA',
    companyName: 'NR Agarwal'
  },
  {
    companyId: 'NRB',
    companyName: 'NRB Bearings'
  },
  {
    companyId: 'NS',
    companyName: 'Nucleus Softwar'
  },
  {
    companyId: 'N10',
    companyName: 'Nureca'
  },
  {
    companyId: 'HV',
    companyName: 'Nxtdigital'
  },
  {
    companyId: 'OR',
    companyName: 'Oberoi Realty'
  },
  {
    companyId: 'OCT',
    companyName: 'Oil Country'
  },
  {
    companyId: 'OI13',
    companyName: 'Oil India'
  },
  {
    companyId: 'OA',
    companyName: 'Omax Autos'
  },
  {
    companyId: 'O02',
    companyName: 'Omaxe'
  },
  {
    companyId: 'OC03',
    companyName: 'One 97 Paytm'
  },
  {
    companyId: 'OPO',
    companyName: 'One Point One S'
  },
  {
    companyId: 'OCA',
    companyName: 'Onelife Capital'
  },
  {
    companyId: 'ONG',
    companyName: 'ONGC'
  },
  {
    companyId: 'OG01',
    companyName: 'OnMobile Global'
  },
  {
    companyId: 'OFS01',
    companyName: 'Oracle Fin Serv'
  },
  {
    companyId: 'OC10',
    companyName: 'Orient Cement'
  },
  {
    companyId: 'OP02',
    companyName: 'Orient Press'
  },
  {
    companyId: 'OT6',
    companyName: 'Oriental Trimex'
  },
  {
    companyId: 'OC05',
    companyName: 'Ortel Comm'
  },
  {
    companyId: 'OHR',
    companyName: 'Osia Hyper Reta'
  },
  {
    companyId: 'OHR',
    companyName: 'Osia Hyper Reta'
  },
  {
    companyId: 'PGH',
    companyName: 'P and G'
  },
  {
    companyId: 'A21',
    companyName: 'P E Analytics'
  },
  {
    companyId: 'PI35',
    companyName: 'Page Industries'
  },
  {
    companyId: 'PP02',
    companyName: 'Panama Petro'
  },
  {
    companyId: 'PD08',
    companyName: 'Pansari Develop'
  },
  {
    companyId: 'PDC02',
    companyName: 'Par Drugs'
  },
  {
    companyId: 'PMF01',
    companyName: 'Parag Milk Food'
  },
  {
    companyId: 'PDS01',
    companyName: 'Paras Defence'
  },
  {
    companyId: 'PIL05',
    companyName: 'Patel Integrate'
  },
  {
    companyId: 'PFT',
    companyName: 'Pattech Fitwell'
  },
  {
    companyId: 'PCB01',
    companyName: 'PCBL'
  },
  {
    companyId: 'PDS',
    companyName: 'PDS'
  },
  {
    companyId: 'PDS',
    companyName: 'PDS'
  },
  {
    companyId: 'PI32',
    companyName: 'Perfect Infra'
  },
  {
    companyId: 'PDE',
    companyName: 'Phantom Digital'
  },
  {
    companyId: 'PM02',
    companyName: 'Phoenix Mills'
  },
  {
    companyId: 'PI11',
    companyName: 'Pidilite Ind'
  },
  {
    companyId: 'PI08',
    companyName: 'Pil Italica'
  },
  {
    companyId: 'PII03',
    companyName: 'Pilani Invest'
  },
  {
    companyId: 'PL',
    companyName: 'Pitti Engineeri'
  },
  {
    companyId: 'PI13',
    companyName: 'Plastiblends'
  },
  {
    companyId: 'PNB05',
    companyName: 'PNB'
  },
  {
    companyId: 'PNB04',
    companyName: 'PNB Gilts'
  },
  {
    companyId: 'PI26',
    companyName: 'PNC Infratech'
  },
  {
    companyId: 'PI44',
    companyName: 'Polycab'
  },
  {
    companyId: 'PFC02',
    companyName: 'Power Finance'
  },
  {
    companyId: 'PGC',
    companyName: 'Power Grid Corp'
  },
  {
    companyId: 'PMP',
    companyName: 'Power Mech'
  },
  {
    companyId: 'PII04',
    companyName: 'PowerGrid InvIT'
  },
  {
    companyId: 'PPP03',
    companyName: 'PPAP Automotive'
  },
  {
    companyId: 'PI17',
    companyName: 'Praj Industries'
  },
  {
    companyId: 'PES',
    companyName: 'Prajay Engineer'
  },
  {
    companyId: 'PS20',
    companyName: 'Prataap Snacks '
  },
  {
    companyId: 'PWI',
    companyName: 'Precision Wires'
  },
  {
    companyId: 'PP19',
    companyName: 'Premier Polyfil'
  },
  {
    companyId: 'PEP02',
    companyName: 'Prestige Estate'
  },
  {
    companyId: 'PS',
    companyName: 'Prime Sec'
  },
  {
    companyId: 'PPF',
    companyName: 'Prince Pipes'
  },
  {
    companyId: 'PC',
    companyName: 'Prism Johnson'
  },
  {
    companyId: 'SME02',
    companyName: 'Pritika Auto'
  },
  {
    companyId: 'PCS03',
    companyName: 'Prozone Intu'
  },
  {
    companyId: 'PCA01',
    companyName: 'Prudent Advisor'
  },
  {
    companyId: 'PP26',
    companyName: 'PSP Projects'
  },
  {
    companyId: 'PTC02',
    companyName: 'PTC India'
  },
  {
    companyId: 'PTL06',
    companyName: 'PTL Enterprises'
  },
  {
    companyId: 'PCC03',
    companyName: 'Punjab Chemical'
  },
  {
    companyId: 'DSS04',
    companyName: 'R M Drip & Spri'
  },
  {
    companyId: 'RJI',
    companyName: 'Radhika Jewel'
  },
  {
    companyId: 'RCM04',
    companyName: 'Radiant Cash'
  },
  {
    companyId: 'RVN',
    companyName: 'Rail Vikas'
  },
  {
    companyId: 'RCM03',
    companyName: 'Rainbow Child'
  },
  {
    companyId: 'RE07',
    companyName: 'Rajesh Exports'
  },
  {
    companyId: 'RP27',
    companyName: 'Rajshree Polypa'
  },
  {
    companyId: 'RST',
    companyName: 'Rama Steel Tube'
  },
  {
    companyId: 'RST',
    companyName: 'Rama Steel Tube'
  },
  {
    companyId: 'MC',
    companyName: 'Ramco Cements'
  },
  {
    companyId: 'RS17',
    companyName: 'Ramco System'
  },
  {
    companyId: 'RI26',
    companyName: 'Ramcoind'
  },
  {
    companyId: 'RS05',
    companyName: 'Rana Sugars'
  },
  {
    companyId: 'RBL01',
    companyName: 'Rane Brake'
  },
  {
    companyId: 'REV',
    companyName: 'Rane Engine'
  },
  {
    companyId: 'RM08',
    companyName: 'Rane Madras'
  },
  {
    companyId: 'RCF01',
    companyName: 'Rashtriya Chem'
  },
  {
    companyId: 'RTT',
    companyName: 'Rategain Travel'
  },
  {
    companyId: 'RMT',
    companyName: 'Ratnamani Metal'
  },
  {
    companyId: 'R',
    companyName: 'Raymond'
  },
  {
    companyId: 'RB03',
    companyName: 'RBL Bank'
  },
  {
    companyId: 'RI46',
    companyName: 'RBM Infracon'
  },
  {
    companyId: 'REC02',
    companyName: 'REC'
  },
  {
    companyId: 'RC04',
    companyName: 'Regency Ceramic'
  },
  {
    companyId: 'RF07',
    companyName: 'Relaxo Footwear'
  },
  {
    companyId: 'RDS01',
    companyName: 'Reliable Data S'
  },
  {
    companyId: 'RCI02',
    companyName: 'Reliance Chemo'
  },
  {
    companyId: 'RP',
    companyName: 'Reliance Power'
  },
  {
    companyId: 'RJ',
    companyName: 'Renaissance'
  },
  {
    companyId: 'RJ',
    companyName: 'Renaissance'
  },
  {
    companyId: 'SH10',
    companyName: 'Responsive Ind'
  },
  {
    companyId: 'BKI01',
    companyName: 'Restaurant Bran'
  },
  {
    companyId: 'RCP',
    companyName: 'Revathi CP'
  },
  {
    companyId: 'OR01',
    companyName: 'RHI Magnesita'
  },
  {
    companyId: 'RIS',
    companyName: 'Richa Info'
  },
  {
    companyId: 'RT08',
    companyName: 'Rossell India'
  },
  {
    companyId: 'RP17',
    companyName: 'Roto Pumps'
  },
  {
    companyId: 'RPG05',
    companyName: 'RPG Life'
  },
  {
    companyId: 'RI27',
    companyName: 'Ruchinfra'
  },
  {
    companyId: 'RP25',
    companyName: 'Ruchira Papers'
  },
  {
    companyId: 'RE11',
    companyName: 'RUDRABHISHEK'
  },
  {
    companyId: 'SEP03',
    companyName: 'S E Power'
  },
  {
    companyId: 'KC17',
    companyName: 'S H Kelkar'
  },
  {
    companyId: 'SE19',
    companyName: 'Sadbhav Engg'
  },
  {
    companyId: 'SC27',
    companyName: 'Sagar Cement'
  },
  {
    companyId: 'SAL03',
    companyName: 'SAL Steel'
  },
  {
    companyId: 'SC48',
    companyName: 'Salona Cotspin'
  },
  {
    companyId: 'SE01',
    companyName: 'Salzer Electro'
  },
  {
    companyId: 'SI05',
    companyName: 'Sanco Ind'
  },
  {
    companyId: 'STl06',
    companyName: 'Sandhar Technol'
  },
  {
    companyId: 'SI03',
    companyName: 'Sangam India'
  },
  {
    companyId: 'SC56',
    companyName: 'Sanginita Chemi'
  },
  {
    companyId: 'SE27',
    companyName: 'Sansera Eng'
  },
  {
    companyId: 'SEM',
    companyName: 'Sarda Energy'
  },
  {
    companyId: 'SI67',
    companyName: 'Saregama India'
  },
  {
    companyId: 'SCT01',
    companyName: 'Sasken Tech'
  },
  {
    companyId: 'SE18',
    companyName: 'SBC Exports'
  },
  {
    companyId: 'SBI',
    companyName: 'SBI'
  },
  {
    companyId: 'SCP02',
    companyName: 'SBI Card'
  },
  {
    companyId: 'SLI03',
    companyName: 'SBI Life Insura'
  },
  {
    companyId: 'FAG',
    companyName: 'Schaeffler Ind'
  },
  {
    companyId: 'SET',
    companyName: 'Selan Explore'
  },
  {
    companyId: 'SE21',
    companyName: 'SEPC'
  },
  {
    companyId: 'SPS04',
    companyName: 'Servotech Power'
  },
  {
    companyId: 'SPS04',
    companyName: 'Servotech Power'
  },
  {
    companyId: 'SPB',
    companyName: 'Seshasayee Pape'
  },
  {
    companyId: 'SOC01',
    companyName: 'Seya Industries'
  },
  {
    companyId: 'SA03',
    companyName: 'Shah Alloys'
  },
  {
    companyId: 'SBP02',
    companyName: 'Shankara Buildi'
  },
  {
    companyId: 'SG04',
    companyName: 'Shanthi Gears'
  },
  {
    companyId: 'SO01',
    companyName: 'Shanti Overseas'
  },
  {
    companyId: 'SMI04',
    companyName: 'Sharda Motor'
  },
  {
    companyId: 'SIS09',
    companyName: 'SHAREINDIA'
  },
  {
    companyId: 'SCP',
    companyName: 'Sheetal Cool Pr'
  },
  {
    companyId: 'SE03',
    companyName: 'Shemaroo Ent'
  },
  {
    companyId: 'SCI',
    companyName: 'Shipping Corp'
  },
  {
    companyId: 'SHIVA54096',
    companyName: 'Shiva Mills Lim'
  },
  {
    companyId: 'ST17',
    companyName: 'Shiva Texyarn'
  },
  {
    companyId: 'SA13',
    companyName: 'Shivam Auto'
  },
  {
    companyId: 'SI65',
    companyName: 'Shradha Infra'
  },
  {
    companyId: 'SI65',
    companyName: 'Shradha Infra'
  },
  {
    companyId: 'RNP01',
    companyName: 'Shree Rama News'
  },
  {
    companyId: 'SI20',
    companyName: 'Shreyans Ind'
  },
  {
    companyId: 'SPR02',
    companyName: 'Shriram Pistons'
  },
  {
    companyId: 'SP21',
    companyName: 'Shriram Prop'
  },
  {
    companyId: 'SHUBH6451',
    companyName: 'SHUBHLAXMI'
  },
  {
    companyId: 'S',
    companyName: 'Siemens'
  },
  {
    companyId: 'SF22',
    companyName: 'Signet Ind'
  },
  {
    companyId: 'STT01',
    companyName: 'Silver Touch Te'
  },
  {
    companyId: 'SI73',
    companyName: 'Sintercom India'
  },
  {
    companyId: 'SPI06',
    companyName: 'Sirca Paints'
  },
  {
    companyId: 'SSM05',
    companyName: 'Siyaram Silk'
  },
  {
    companyId: 'E11',
    companyName: 'SJS Enterprises'
  },
  {
    companyId: 'S11',
    companyName: 'SJVN'
  },
  {
    companyId: 'S21',
    companyName: 'Skipper'
  },
  {
    companyId: 'SBI13',
    companyName: 'SKP Bearing'
  },
  {
    companyId: 'SG08',
    companyName: 'Sky Gold'
  },
  {
    companyId: 'SGS03',
    companyName: 'SMC Global Secu'
  },
  {
    companyId: 'SP38',
    companyName: 'SMS Pharma'
  },
  {
    companyId: 'SD6',
    companyName: 'Sobha'
  },
  {
    companyId: 'SE24',
    companyName: 'Softtech Engine'
  },
  {
    companyId: 'SOLAR54154',
    companyName: 'SOLARA ACTIVE P'
  },
  {
    companyId: 'SE20',
    companyName: 'Solex Energy'
  },
  {
    companyId: 'SDB',
    companyName: 'Som Distillerie'
  },
  {
    companyId: 'SCB',
    companyName: 'Somi Conveyor'
  },
  {
    companyId: 'SBP04',
    companyName: 'Sona BLW'
  },
  {
    companyId: 'SIL20',
    companyName: 'Sonu Infratech'
  },
  {
    companyId: 'SP43',
    companyName: 'Sotac Pharma'
  },
  {
    companyId: 'SSF07',
    companyName: 'Spandana Sphoor'
  },
  {
    companyId: 'SR06',
    companyName: 'Speciality Rest'
  },
  {
    companyId: 'SPENC54233',
    companyName: 'Spencer Retail'
  },
  {
    companyId: 'SI35',
    companyName: 'Spentex Ind'
  },
  {
    companyId: 'SPI01',
    companyName: 'SPIC'
  },
  {
    companyId: 'SJ01',
    companyName: 'SpiceJet'
  },
  {
    companyId: 'SPL9',
    companyName: 'SPL Industries'
  },
  {
    companyId: 'SI97',
    companyName: 'Sportking India'
  },
  {
    companyId: 'SRF',
    companyName: 'SRF'
  },
  {
    companyId: 'SAT03',
    companyName: 'Srivasavi'
  },
  {
    companyId: 'SI36',
    companyName: 'Standard Ind'
  },
  {
    companyId: 'SFC02',
    companyName: 'Star Cement'
  },
  {
    companyId: 'SPM04',
    companyName: 'Star Paper'
  },
  {
    companyId: 'NMA',
    companyName: 'Starteck Financ'
  },
  {
    companyId: 'ST20',
    companyName: 'Sterlite Techno'
  },
  {
    companyId: 'SK03',
    companyName: 'Stove Kraft'
  },
  {
    companyId: 'SA10',
    companyName: 'Strides Pharma '
  },
  {
    companyId: 'GL02',
    companyName: 'Stylam Ind'
  },
  {
    companyId: 'S07',
    companyName: 'Subros'
  },
  {
    companyId: 'SCI08',
    companyName: 'Sudarshan Chem'
  },
  {
    companyId: 'SV01',
    companyName: 'Sula Vineyards'
  },
  {
    companyId: 'SW01',
    companyName: 'Sumit Woods'
  },
  {
    companyId: 'SPA',
    companyName: 'Sun Pharma Adv'
  },
  {
    companyId: 'STN01',
    companyName: 'Sun TV Network'
  },
  {
    companyId: 'SFH',
    companyName: 'Sundaram'
  },
  {
    companyId: 'SL',
    companyName: 'Superhouse'
  },
  {
    companyId: 'SE15',
    companyName: 'Suprajit Eng'
  },
  {
    companyId: 'SP',
    companyName: 'Supreme Petro'
  },
  {
    companyId: 'SP',
    companyName: 'Supreme Petro'
  },
  {
    companyId: 'ST12',
    companyName: 'Surana Telecom'
  },
  {
    companyId: 'SST01',
    companyName: 'Surani Steel Tu'
  },
  {
    companyId: 'STI9',
    companyName: 'Sutlej Textiles'
  },
  {
    companyId: 'SL19',
    companyName: 'Suumaya Ind.'
  },
  {
    companyId: 'SLS01',
    companyName: 'Suven Life Sci'
  },
  {
    companyId: 'SP19',
    companyName: 'Suven Pharma'
  },
  {
    companyId: 'SE17',
    companyName: 'Suzlon Energy'
  },
  {
    companyId: 'SM18',
    companyName: 'SVP Global'
  },
  {
    companyId: 'SM09',
    companyName: 'Swan Energy'
  },
  {
    companyId: 'SE',
    companyName: 'Swaraj Engines'
  },
  {
    companyId: 'SCS04',
    companyName: 'Symphony'
  },
  {
    companyId: 'SST06',
    companyName: 'Syrma SGS'
  },
  {
    companyId: 'ANUP54246',
    companyName: 'TAEL'
  },
  {
    companyId: 'TGV',
    companyName: 'Taj GVK Hotels'
  },
  {
    companyId: 'TS09',
    companyName: 'Take Solutions'
  },
  {
    companyId: 'TAC',
    companyName: 'Talbros Auto'
  },
  {
    companyId: 'TT01',
    companyName: 'Tamil Telecom'
  },
  {
    companyId: 'TS11',
    companyName: 'Tanla Platforms'
  },
  {
    companyId: 'TFP',
    companyName: 'Tapi Fruit'
  },
  {
    companyId: 'TCL01',
    companyName: 'TARACHAND'
  },
  {
    companyId: 'ARG',
    companyName: 'TARC'
  },
  {
    companyId: 'TBE',
    companyName: 'Tasty Bite'
  },
  {
    companyId: 'TC14',
    companyName: 'Tata Coffee'
  },
  {
    companyId: 'TC17',
    companyName: 'Tata Comm'
  },
  {
    companyId: 'TT',
    companyName: 'TATA Cons. Prod'
  },
  {
    companyId: 'TE',
    companyName: 'Tata Elxsi'
  },
  {
    companyId: 'TM',
    companyName: 'Tata Metaliks'
  },
  {
    companyId: 'TM03',
    companyName: 'Tata Motors'
  },
  {
    companyId: 'TM03',
    companyName: 'Tata Motors'
  },
  {
    companyId: 'TPC',
    companyName: 'Tata Power'
  },
  {
    companyId: 'TSI',
    companyName: 'Tata Steel Long'
  },
  {
    companyId: 'TCI08',
    companyName: 'TCI Express'
  },
  {
    companyId: 'TCC',
    companyName: 'TCNS Clothing C'
  },
  {
    companyId: 'TCP01',
    companyName: 'TCPL Packaging'
  },
  {
    companyId: 'TCS',
    companyName: 'TCS'
  },
  {
    companyId: 'BBaH',
    companyName: 'TGB Banquets'
  },
  {
    companyId: 'SH12',
    companyName: 'The Byke Hosp'
  },
  {
    companyId: 'TWI',
    companyName: 'The Western Ind'
  },
  {
    companyId: 'TCI',
    companyName: 'Thomas Cook'
  },
  {
    companyId: 'TWO',
    companyName: 'Tide Water Oil'
  },
  {
    companyId: 'TIL',
    companyName: 'TIL'
  },
  {
    companyId: 'TT03',
    companyName: 'Time Techno'
  },
  {
    companyId: 'TG',
    companyName: 'Times Guaranty'
  },
  {
    companyId: 'TI23',
    companyName: 'Timken'
  },
  {
    companyId: 'TCI02',
    companyName: 'Tinplate'
  },
  {
    companyId: 'TI25',
    companyName: 'Tips Industries'
  },
  {
    companyId: 'TI25',
    companyName: 'Tips Industries'
  },
  {
    companyId: 'TF14',
    companyName: 'TIPSFILMS'
  },
  {
    companyId: 'TI01',
    companyName: 'Titan Company'
  },
  {
    companyId: 'TATAM57000',
    companyName: 'TML - D'
  },
  {
    companyId: 'TATAM57000',
    companyName: 'TML - D'
  },
  {
    companyId: 'TEL',
    companyName: 'Touchwood Enter'
  },
  {
    companyId: 'TT19',
    companyName: 'Tracxn'
  },
  {
    companyId: 'TCI04',
    companyName: 'Transport Corp'
  },
  {
    companyId: 'THE01',
    companyName: 'Tree House'
  },
  {
    companyId: 'TREJH7605',
    companyName: 'Trejhara'
  },
  {
    companyId: 'TBZ',
    companyName: 'Tribhovandas'
  },
  {
    companyId: 'TE10',
    companyName: 'Triveni Engg'
  },
  {
    companyId: 'TTK02',
    companyName: 'TTK Prestige'
  },
  {
    companyId: 'TIIND54076',
    companyName: 'Tube Investment'
  },
  {
    companyId: 'TVT',
    companyName: 'TV TodayNetwork'
  },
  {
    companyId: 'IBN',
    companyName: 'TV18 Broadcast'
  },
  {
    companyId: 'TVS',
    companyName: 'TVS Motor'
  },
  {
    companyId: 'TVS03',
    companyName: 'TVS Srichakra'
  },
  {
    companyId: 'UCO',
    companyName: 'UCO Bank'
  },
  {
    companyId: 'UI23',
    companyName: 'Udayshivakumar '
  },
  {
    companyId: 'CS08',
    companyName: 'Ugro Capital'
  },
  {
    companyId: 'UFS01',
    companyName: 'Ujjivan Financi'
  },
  {
    companyId: 'USF',
    companyName: 'Ujjivan Small'
  },
  {
    companyId: 'UTC01',
    companyName: 'UltraTechCement'
  },
  {
    companyId: 'UE01',
    companyName: 'Uma Exports'
  },
  {
    companyId: 'UBI01',
    companyName: 'Union Bank'
  },
  {
    companyId: 'US',
    companyName: 'United Spirits'
  },
  {
    companyId: 'UI21',
    companyName: 'Univastu India'
  },
  {
    companyId: 'UP04',
    companyName: 'UPL'
  },
  {
    companyId: 'USo',
    companyName: 'Upsurge Seeds'
  },
  {
    companyId: 'UG01',
    companyName: 'Urja Global'
  },
  {
    companyId: 'UM01',
    companyName: 'Usha Martin'
  },
  {
    companyId: 'UMI02',
    companyName: 'Usha Martin Edu'
  },
  {
    companyId: 'UA04',
    companyName: 'UTI AMC'
  },
  {
    companyId: 'USM',
    companyName: 'Uttam Sugar'
  },
  {
    companyId: 'VI01',
    companyName: 'Vadilal Ind'
  },
  {
    companyId: 'VC10',
    companyName: 'Varanium'
  },
  {
    companyId: 'VA08',
    companyName: 'Vardhman Acryli'
  },
  {
    companyId: 'VH05',
    companyName: 'Vardhman Hold'
  },
  {
    companyId: 'VT10',
    companyName: 'Vardhman Text'
  },
  {
    companyId: 'VE08',
    companyName: 'Varroc Engineer'
  },
  {
    companyId: 'VB05',
    companyName: 'Varun Beverages'
  },
  {
    companyId: 'VE01',
    companyName: 'Vascon Engineer'
  },
  {
    companyId: 'VFA',
    companyName: 'Veekayem Fashio'
  },
  {
    companyId: 'VFI01',
    companyName: 'Vels Film'
  },
  {
    companyId: 'V03',
    companyName: 'Venkys'
  },
  {
    companyId: 'VR01',
    companyName: 'Venus Remedies'
  },
  {
    companyId: 'VWS',
    companyName: 'Vikas WSP'
  },
  {
    companyId: 'VL04',
    companyName: 'Vimta Labs'
  },
  {
    companyId: 'VT03',
    companyName: 'Vindhya Telelin'
  },
  {
    companyId: 'VO04',
    companyName: 'Vinny Overseas'
  },
  {
    companyId: 'VO04',
    companyName: 'Vinny Overseas'
  },
  {
    companyId: 'MI53',
    companyName: 'VIP Clothing'
  },
  {
    companyId: 'VIP',
    companyName: 'VIP Industries'
  },
  {
    companyId: 'VS15',
    companyName: 'Visa Steel'
  },
  {
    companyId: 'VC12',
    companyName: 'Vital Chemtech'
  },
  {
    companyId: 'VLS',
    companyName: 'VLS Finance'
  },
  {
    companyId: 'IC8',
    companyName: 'Vodafone Idea'
  },
  {
    companyId: 'V',
    companyName: 'Voltas'
  },
  {
    companyId: 'VST01',
    companyName: 'VST Tillers'
  },
  {
    companyId: 'W12',
    companyName: 'Wanbury'
  },
  {
    companyId: 'WFP',
    companyName: 'Wealth First Po'
  },
  {
    companyId: 'WSL',
    companyName: 'Websol Energy'
  },
  {
    companyId: 'WGS',
    companyName: 'Welspun Corp'
  },
  {
    companyId: 'WI03',
    companyName: 'Welspun India'
  },
  {
    companyId: 'WIC01',
    companyName: 'Welspun Invest'
  },
  {
    companyId: 'DIC',
    companyName: 'Westlife Food'
  },
  {
    companyId: 'WI11',
    companyName: 'Wheels'
  },
  {
    companyId: 'WMC',
    companyName: 'Williamson Mago'
  },
  {
    companyId: 'W05',
    companyName: 'Wockhardt'
  },
  {
    companyId: 'WP03',
    companyName: 'Worth Periphera'
  },
  {
    companyId: 'WSI',
    companyName: 'WS Industries'
  },
  {
    companyId: 'CS20',
    companyName: 'Xchanging Sol'
  },
  {
    companyId: 'ZEE',
    companyName: 'Zee Entertain'
  },
  {
    companyId: 'ZT01',
    companyName: 'Zen Tech'
  },
  {
    companyId: 'ZE',
    companyName: 'Zenithexpo'
  },
  {
    companyId: 'ZT02',
    companyName: 'Zensar Tech'
  },
  {
    companyId: 'WAB',
    companyName: 'ZFCVINDIA'
  },
  {
    companyId: 'ZIMLA54140',
    companyName: 'ZIM Lab'
  },
  {
    companyId: 'ZCC',
    companyName: 'Zodiac Clothing'
  },
  {
    companyId: 'Z',
    companyName: 'Zomato'
  },
  {
    companyId: 'ZHC',
    companyName: 'Zota Health Car'
  },
  {
    companyId: 'ZAC',
    companyName: 'Zuari Agro Chem'
  },
  {
    companyId: 'ZI01',
    companyName: 'Zuari Ind.'
  },
  {
    companyId: 'ZW01',
    companyName: 'Zydus Wellness'
  }
]
