Příkazy:
=========

X označuje číslo    
Argument mezi ( ) je volitelný


Manažer
-------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!afklimit | X | nastaví max afk limit |
|!botname | (jméno) | nastaví nové jméno bota |
|!clearchat | | smaže chat |
|!cycle | | ON/OFF DJ cyklus |
|!cycletimer | X | nastaví max čas, po který bude DJ cyklus zapnutý |
|!historyskiplimit | X | nastaví max limit pro přeskočení písní v historii (X=1-50) |
|!language | (jazyk) | změní jazyk bota |
|!locktimer | X | nastaví max čas, po který bude DJ fronta zamčená |
|!logout | | odhlásí uživatele, která hostí bota |
|!refresh | | aktualizuje okno prohlížeče, na kterém běží Bot |
|!usercmdcd | X | nastaví cooldown pro příkazy šedých uživatelů |
|!usercommands | | ON/OFF příkazy pro uživatele |
|!voteskip | (X) | bez argumentu vypíše momentální limit meh, s argumentem nastaví nový limit meh |

Vyhazovač+
--------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!add | @user | přidá uživatele do fronty |
|!afkremoval | | ON/OFF anti AFK ochrana pro fronty |
|!autoskip | | automaticky přeskakuje songy po dohrání (když je buglý cyklus) |
|!bouncer+ | | ON/OFF vyhazovač+ |
|!cmddel | | ON/OFF mazání příkazů |
|~~!deletechat~~ | ~~@user~~ | ~~odstraní veškeré zrávy kokrétního uživatele~~ (**NEFUNKČNÍ, ČEKÁ NA OPRAVU**) |
|!historyskip | | ON/OFF přeskočení písniček v hostorii |
|!lock | | uzamkne frontu |
|!lockdown | | uzamčení místnosti: pouze zaměstnanci mohou chatovat |
|!maxlength | X | max povolená délka songu (v sekundách) |
|!move | @user (X) | posune uživatele na pozici X, výchozí je 1 místo |
|!remove | @user | odstraní uživatele z fronty |
|!roulette | | spustí ruletu |
|!songstats | | ON/OFF statistiky písniček |
|!swap | @user1 @user2 | prohodí uživatele ve frontě |
|!unlock | | odemkne frontu |
|!welcome | | ON/OFF uvítací zpráva |

Vyhazovač
-------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!active | (X) | ukáže, kolik uživatelů chatovalo v posledních X minutách, výchozí je 60 minut |
|!afkreset | @user | resetuje AFK čas uživatele |
|!afktime | @user | ukáže, jak dlouho byl uživatel AFK |
|!autodisable | | ON/OFF každou hodinu pošle bot !afkdisable a !joindisable, to vypne automatické připojování a AFK zprávy pro PlugCubed |
|!ban | @user | zabanuje uživatele na 1 den |
|!blacklist / !bl | | přidá písničku do blacklistu |
|!blinfo | | informace potřebné pro zadaní songu do blacklistu |
|!cycleguard | | ON/OFF časová ochrana zapnutého cyklu |
|!dclookup / !dc | (@user) | vyhledá poslední pozici odpojeného uživatele |
|!english | @user | požádá uživatele jeho jazykem, aby mluvil anglicky |
|!eta | (@user) | ukáže, kdy se přibližně uživatel dostane k pultu |
|!filter | | ON/OFF filtr chatu |
|!forceskip | | přeskočí song |
|!jointime | @user | ukáže, jak dlouho už je uživatel v roomce |
|!kill | | vypne Bota |
|!lockguard | | ON/OFF časová ochrana zamčené fronty |
|!motd | (X)/(zpráva) | bez argumentu vypíše momentální zprávu dne, když je zadáno X, vypíše zprávu každých X songů, když je zadána zpráva, nastaví novou zprávu dne. |
|!mute | @user (X) | ztlumí uživatele na 15 min (X=0-15), 30 min (X=16-30), 45 min (X=31-∞, nebo bez argumentu) |
|!reload | | restartuje Bota |
|!restricteta | | ON/OFF omezení příkazu eta pro šedé uživatele na jedenkrát za hodinu |
|!sessionstats | | zobrazí vaše statistiky od posledního připojení |
|!lockskip | (důvod) | přeskočí píseň a posune dj zpět na první místo
Důvody: <ul><li>theme - Song nevyhovuje aktuálnímu žánru této místnosti</li><li>op - Song je na seznamu příliš často hraných</li><li>history - Song je již v historii</li><li>mix - Hrát mixy je proti pravidlům</li><li>sound - Song má velmi špatnou kvalitu zvuku, nebo žádný zvuk</li><li>nsfw - Song obsahuje nevhodný obsah (obrazový nebo zvukový)</li><li>un - Song nebyl dostupný pro všechny uživatele</li></ul> |
|!skip | (důvod) | přeskočí současného DJ, chytrý systém sám zamkne frontu (DJ je posunutý na pozici určenou ve !skippos) |
|!skippos | X | nastaví pozici pro přeskočeného DJ při použití skip a lockskip |
|!status | | zobrazí momentální nastavení Bota |
|!timeguard | | ON/OFF přeskakování dlouhých songů |
|!togglebl | | ON/OFF přeskočení blacklistu |
|!togglemotd | | ON/OFF zpráva dne |
|!togglevoteskip | | ON/OFF peskočení pro počet Meh |
|!unban | @user | odbanovat uživatele |
|!unmute | | zrušit umlčení uživatele |
|!voteratio | @user | zobrazi statistiku hlasování pro uživatele |
|!whois | @user | vypíše detailní informace o uživateli |

Rezidentní DJ
-----------

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!link | | zobrazí yt odkaz pro současný song



Uživatel
----

|Příkaz | Argumenty | Popis |
|:------:|:---------:|:--------------------------------------:|
|!8ball | (otázka) | zeptejte se bota na otázku, odpoví vám ruznými způsoby ano, nebo ne. |
|!autowoot | | odkaz na RCS, doporučený script/doplněk nejen pro autowoot |
|!source | | autoři scriptu |
|!ba | | vysvětlení Brand Ambassador hodnosti |
|!commands | | odkaz na tento seznam příazů |
|!cookie | (@user) | pošle náhodnou sušenku uživateli |
|!dclookup / !dc | | vyhlednání svojí poslední pozice a připojení do fronty  |
|!emoji | | odkaz na seznam emotikonů |
|!eta | | ukáže, za jak dlouho se dostaneš k pultu |
|!fb | | odkaz na náš facebook |
|!ghostbuster | (@user) | zkontroluje jestli uživatel není duch |
|!gif | (tag) | vrátí gif podle zvoleného tagu, nebo náhodný gif pokud nebyl tag zvolen. |
|!help | | odkaz na obrázek, který pomůže novým lidem se zorientovat na plugu |
|!join | | připojit se k ruletě, pokud je puštěna |
|!leave | | opustit ruletu, pokud jsi připojen |
|!link | | když je uživatel DJ, zobrazí odkaz na na současnou píseň |
|!ping | | pong! |
|!rules | | odkaz na pravidla (pokud je nastaven) |
|!theme | | odkaz na temá, zaměření místnosti (pokud je nastaven) |
|!website | | odkaz na stránky (pokud je nastaven) |
|!youtube | | odkaz na youtube kanál (pokud je nastaven) |
|!stream | | odkaz na twitch stream (pokud je nastaven) |
