const { AttachmentBuilder, EmbedBuilder, time } = require("discord.js");

module.exports = {
  name: "ayarlar",
  description: " Sunucu ayarlarına bakarsın!",
  type: 1,
  options: [],

  
  run: async(client, interaction, db, Rank, AddRank, RemoveRank) => {
    
    const butonrolSystem = db.fetch(`buton_rol${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const botlistSystem =  db.fetch(`botekle_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const capslockEngelSystem = db.fetch(`capslockengel_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const gorselEngelSystem = db.fetch(`görselengel_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const giriscikisSystem = db.fetch(`hgbb_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const kayitSystem = db.fetch(`kayıt_kanal_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const kufurEngelSystem = db.fetch(`kufurengel_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const modLogSystem = db.fetch(`modlogK_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const muteSystem = db.fetch(`yetkili_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const otorolSystem = db.fetch(`otorol_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const otoTagSystem = db.fetch(`ototag_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const ozelodaSystem = db.fetch(`ozelodasistemi_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const reklamEngelSystem = db.fetch(`reklamengel_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const ticketSystem = db.fetch(`ticketkanal_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const timeoutSystem = db.fetch(`timeoutSistemi_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const yasaklıKelimeSystem = db.fetch(`yasaklı_kelime_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";
    const levelSystem = db.fetch(`acikmiLevel_${interaction.guild.id}`) ? "<:white_check_mark: 1039607067729727519> | Açık" : "<:carpi:1040649840394260510> | Kapalı";

    const embed = new EmbedBuilder()
    .setTitle("<:ayarlar:1039607040898781325> | Silex - Ayarlar Menüsü!")
    .addFields(
      { name: "**Botlist Sistemi:**", value: `${botlistSystem}`, inline: true },
      { name: "**Buton Rol Sistemi**", value: `${butonrolSystem}`, inline: true  },
      { name: "**Capslock Sistemi**", value: `${capslockEngelSystem}`, inline: true  },
      { name: "**Görsel Engel Sistemi**", value: `${gorselEngelSystem}`, inline: true  },
      { name: "**Giriş Çıkış Sistemi**", value: `${giriscikisSystem}`, inline: true  },
      { name: "**Kayıt Sistemi**", value: `${kayitSystem}`, inline: true  },
      { name: "**Küfür Engel Sistemi**", value: `${kufurEngelSystem}`, inline: true  },
      { name: "**Mod Log Sistemi**", value: `${modLogSystem}`, inline: true  },
      { name: "**Mute Sistemi**", value: `${muteSystem}`, inline: true  },
      { name: "**Oto Rol Sistemi**", value: `${otorolSystem}`, inline: true  },
      { name: "**Oto Tag Sistemi**", value: `${otoTagSystem}`, inline: true  },
      { name: "**Özel Oda Sistemi**", value: `${ozelodaSystem}`, inline: true  },
      { name: "**Reklam Engel Sistemi**", value: `${reklamEngelSystem}`, inline: true  },
      { name: "**Ticket Sistemi**", value: `${ticketSystem}`, inline: true  },
      { name: "**Timeout Sistemi**", value: `${timeoutSystem}`, inline: true  },
      { name: "**Yasaklı Kelime Sistemi**", value: `${yasaklıKelimeSystem}`, inline: true  },
      { name: "**Level Sistemi**", value: `${levelSystem}`, inline: true  }
            )
    .setColor('Blue')
    interaction.reply({ embeds: [embed]})


  }
};

//