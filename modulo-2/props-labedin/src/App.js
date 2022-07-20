import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/SmallCard/SmallCard';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/P9miSlpM0SQ-JorLfWVXjb4x-tVGctUcYL5ydmu4WekiBLtiU0Z6IDgKBH_f_gVTd6wKILf333ThsYUwUB07ku2SdfxBYWsyLZiu-TzyEfgHmqsj5GPLczLnqJbdO3YuCU-2nQRveyWBylZ5nPOUB8oOvb7CYNIjNpDyHrSh2jPgyNoZGuvH0nbE3-MeQWOxb9ZNURWV1ro2Y-hLHt1eMfuYB0cUuFZiK12STpXnUKfKkxI9DrdDk0eWGNJZRwMST61OC8YMBxRXZ3JyKePOJ2wPKv59OiNPPNrPLO7Ih6DNUbeZuEd_RJN65ddulStrQFIEUCe8pId5caEKnFOyrynjxEC1oYgMvmM7ZQTRzz1SXaGi0wY9u9DoRPmfkP-QcFtDuq6rf9e5K2vHbAOFBCVopadXl5LpScEmEnDj8pbOlwlW6tyyki-FSV8W87r67eaBPG1EggxnkqFpNHRFdGD1ipFPaUibGpufpB_0Pr2WrxeXUWUAO0Dc6Js-ZKhXMpRsM4G4TqGFH6Y47xWtf5SMLHtLCuo7Yg3fqTWezI8GgGOdCzp_cFXr3gtRoOcMGfAOFogcvB-wR6J9d_gLzfW-d1WVMTL_xgiXUVMMsh1qAMMBXMi6smGcRN-CiD-KSm80uuujbtxynorrkCaTh04urAyLp5CFF602Ltc1qFLQMRIp1Y61fAl7aVk-hnRvqmVi65fk45C5L8lY1Uz460soYqII3dLye-OtUwV9GbRIRO_a2J4NDUV3eGRdJE7hNZkMvpPtMoDele7ocOENwktiSq2O3uVh=s280-no?authuser=1"
          nome="Murilo Voigt Schlickmann" 
          descricao="Oi, eu sou o Murilo. Sou aluno da Labenu. Gosto muito de aprender a programar, enquanto estou fazendo o curso, penso quais partes de cada conteúdo pode ser usado no sistema da PraeSoft, depois de resolver as atividades, tento fazer um programa criaativo."
        />
        
        <ImagemButton 
          imagem="https://lh3.googleusercontent.com/iLnwiwZ7piuClwYVGUphobgACzjCfMJmVFMP3F3_RVxZYD2xQkkRILfhQw1YtiqGdUMcowIzmena3iHSIN9zk5KtUDr36HWzpqpDL40xpNPxyGImFNTdBlPM_OwsroJGoy4cxLQsoxGd-0OBk1Rv04VzHfEeOtHgX8gOw9doSHTa3N_pcsFLuJwD_91qy2hYii0Y-9Rb2gPetm6e0WOnXLgCtPyWPUgMvXkfR8tDDTM-1j-D9dIxhOAky-kD5KpIkxpkSApOigvqfZOUj1yWixp0UNQHIfRdaa7ioFAApgO2Z-I1NFze-Zd6OsLIJl0EhWaltD8v5_dmv63nkdg0ES8vthzQmUkQWesCuIc36QGAT4xeyb8RrOVQKLyNPFkWFYU9hHSsuEmVMd8vSn7XX8hLDnMjJyCohqpjiCxL03CQRNCupTjM5s3zdN8Pz9NRv90TTIDB4Wst88xCHkGG0jDja06Zrv9yi13X4Dim4OSt8lsYhhkT7zmVu6bvmhUBzBmu9jSAo7kZyGDsocyXe5KsQo52195cztoaBUs7AhvVPpnaMAiVUgRLtMhR3t6IFfJYu2Gt9v6WmQ2gv9yHzL7DTxl-CqeqnYIjNx9OpljgUW9fgmgkyf7MJorVJ9Rihb30Sdgz9N0hmSL8WsuZls4qKH_Vd2lV81gY2goj_vJAK2qik02-eVKAnJLfCAXzI_GBKDny2K4pKKqxS55YZBEDtKf-Aqh1NlgN_sCxsyQv8m3yRnvPTb47Dyk0WA6JCNe60jfgtK73zNXE-YtnDNzXmKMHWsmq=s24-no?authuser=1" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        imagem="https://lh3.googleusercontent.com/4QjNhsgJmj-P_pI4qCFo4YNBNpLwi5rWAqV-ZENDQVOedhH0VDNEVa7CHM9hNCrwTC2FUuE_DIm63nsHN17BC70Nj-ASogmdngg1n3BF91ojawT5FtZr9aRGuvITnTuAWWH9JYtcM4pXg_l39dibLXndB-qirmQ_uxsbwMPSZxQSfXa93T9FFr_n87D755IvQiwwSHT-HZo_bqZ83LEyK4-k_iOUyNRC18zhXCHkTKUkKD3NkuTRIODE4gx6APIDIOEyGlFl43JILcEXRW2pCy_d1ExizcZLKudeKGwleZgs2M0XSBMlYSVPmV7aJmp_KXfd7_3eyrojBIiL-XXfwO0xCxYOAe2nNYci70a1TRZNtm9weVLQQx3TfFDLke11lo7p7Su6MZMMk1v2dAI-6q8kJh5acf3HseOCNCWX4nSc-5Xy4ZcCvw0Nw0dlLZPYn-ne2-yEuCJITgdKZMSJUHBhGhfpwTrKS4BIbb6mU7YNJFJ4fGxPVMchjCyQfMvYj-kxm6Hj9jPd3IIRbpp5jF8rhEUZvQ21LoGsKZglxburVPYnyBVBjZtOlH3Tx-XblJrEHWu90c3Hrifr29lPtSN6xbNGVqwxdVEzXf-EbGaXzWyCosAEvx3XyLEAH29uutKu8xu4sVpz9SfegKPTAMtr95BpGGNK8AGWlSANAtTAz0PoKw2T5RjkLlbANO_WTD4XabzBJtXVdixXASJRAsnuxPEiweMO4kyteI0PbB_NsvQb9k6EG5XQRy3_VyHpkeOrttMUG1yGj7tYVcX8St3XXyHbMiZu=s24-no?authuser=1"
        nome="Endereço:"
        descricao="Rua Bahia 427"/>
      
        <CardPequeno
        imagem="https://lh3.googleusercontent.com/1iUp2c_8N-x9EE5mCmuhBGZAbBhsFaVJcMh9sPwTXEpLLNAf3jEfGLo8f5QIPKnDR0TT-Mja7pMlW6Es5dzijOx5geO6jFkskSjkkwgPzLuUnP7MJTYPfKsmp_1FSaXQgLUmcmfaDVYgLFRS4gGY_uvwrNiqICGbJB-h3VLlBEDs8Ae4pCsi_s7ZAi9bICxdRYl8TDQdhEUQplPYjF5H8_p2A_UVZiHJWw5FDhVja1RvC5b5vCIbMLOLZsgH1Qlo9mC0ztfC46IC3XtTyPANrBG70ZRBhjCYY0e9ar_ZBmcKGs3rq9h8Wo7NG3pQ1Xc9-tjKvluMtpRqZcZE9uYwuypfCwCP5R_iKmIkWWmF6qeRr70iycVFpa46cd4FnoMBJhRqBLPq99mReTFGfUNdSnPMldlg1o3yuzXlmF3Tt_PYJ5Y_PnnTT-gtshfzSMxrqGmYWyJtWu8BrPTsQtgZhlj_mLl-g0RgglCz2TJSWz7Gi9krIxRqm7vyAitSOhJbyKAeRBs_tUvVgEkJx2jNMAFgh9KfxOEnX8RW_OarBI1hUOkmQRhPJrxfbHbWFGUI9yfdEqfFG7OFT6cts3wdbbszE6y5W8S3Fs97x41FkLDkhrNwWgigzeGnqvzz8CoePC2jcUxereL3SN5FcWEI1UFW29m5f0ouVS-aYGEBP5obQcO4qtZdWbLjF3_dAYFhUWH-g0gByVeAQAVY7f64MbbNoPF_JRCGWM9iolxW-h3u1j50rKPCcg_pb2jX_MhUQjNsojBiq3CEuedQvo2YGeRayUY1gTqH=s24-no?authuser=1"
        nome="E-mail:"
        descricao="murilo.praesoft@gmail.com"/>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/13AvkNLDDtr8uGhZEJmm3s0p1sOaeRADMZW5xKNdXELeChr7YfNx-PAemkD-7Jyr1t0eS0bfRUTUtCVkSPgdqjHooBMjv7HxvAlyKQOyAt3HXixcDLDT1OXzHyfXAXTWTEgrhMWVaxGEPACJ_PTEJeDic0HP1IFz7s4mRxpToHT6yml6ccRWEibqmYGFWOdQmstZSVXF8pDoMlwXCJXt40X7tiVF4pnkfA8DafM0YYtkoRaz0M1dIjXFeD1x15H5Dj1fkit5n7_QlXHsKlT6K21kyLwZLvcpBPpjih8O1UnEtTBVUN4GhgFod40FujyCbJ79gBrEBzZOio6IhzxlPwPtlXJValFzeKue_JWXg5PxXyjhxRbTe87exD1fsT0Gxxl4lUpS9BEMSB9VrRbfyeeyA7Cr0Sa3eskMqz2RmZK6UBfXY2L-HSsNQ8kP1-gey79MZB-GN0va5ouSJFQL7BWQ2s3_6BI5HTmw1V3GnaQnJX7CXTzoI15rfHfXFU899AyQJXvHA1yrQdp928tyqFLtdIdeHSceqCj1X4hEh4yxWPLwOIzt4ybPaRtddq3bHurJZH21PaKZsZR-nKd1kkx6ZKSsorwlibz9KYWHTMThHepEEHUlqTkSd0wN4E1E9GkFZwJZbXwKom7bFE53lOtzZAV7CO2gdQ3xT75ZcGI5l1RGVMc7h8yGyoYxzg15sQbA9dslDHOqzJUzvVqMIUzkQaF4KHw7sWTZGBl5AHj4GHaynBNZtphHP7_CexWj8kghk9wuiZmXTfZDAHGHg2aNvbhcpW_j=w223-h226-no?authuser=1" 
          nome="PraeSoft" 
          descricao="Emissão de notas fiscais | Suporte aos clientes, parte tecnica e parte de software." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        <ImagemButton
        imagem="https://lh3.googleusercontent.com/gJnkfAkuAmncsLJ4R_hReMy1lXVtiJdAYhSQXuJgpdahHmEOk68DrUT4HPKHMbGdLMzoyvvWujaSPnGl3n4m48Tf4P4nVQSwTZWjT48Fu7AAHcKu8B0CLZchQdklI5tNJxfHGbsT9Y-KJkNFiia-FRiwol3qs130AELz8SXMHrftZhsE7J0wf0GCsRessAxMgIt9IPWnor81H5DKFLca0CRP-ExTf0yjoc4TBarpXMV1vjqvLO8U_WUFI88MZ5-JI2KIiGnvuM6hhOdmePT8-tqoJgOT9QtiHOTT1NgQWVL3vw26_YzubVP-JvqMLUBKq2PwNyhXs22eGkmJ0xcTjXFWNnz9W52JifPUSUCrVuS6_qUzad2FNFj5-NYRL67VTf0_almiQZc9uDesZuvl8lV8V522o69kERFaJZa_ZX0yjNaU7Uao6RX07LhPfVTY9mpJHMGmotSu3QOdqB0v0S0DRzfkMupNp9Hfg-2STeHQclUgauO9It2VStTFDGSc5ZQfQYB0CKGvGMiDxWMowXoAkZlCs27WM-GnhHhjSLRwwWFOIrKaEWgGJZ337d3jl9J1xcBdJba97nlZVCIysf7GJM9m1thvkPMQkg6UJ9Rj3nx0YpDfszq2lOMuDIrUR4bIQ_OnCHluD0uMvGZHpKs-idbLuTCKjISWj6TFCCC5sAb6PjLeTX4wCt9WysglPdiuENp8vyLiNVd3sEQyK9pxvnSO_FLlnxfIOhWUzIy5AnY4X83ufQK_3FaJ7luhf1CqPyFpbxKqqZwUMfFfiSpQnoW-hG98=s32-no?authuser=1"
        texto="WhatsApp"/>        
      </div>
    </div>
  );
}

export default App;
