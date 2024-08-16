SELECT * FROM reagent_inventory.historyreagentdata;

alter table historyreagentdata
drop index unique_lotno;

alter table historyreagentdata
drop foreign key historyreagentdata_ibfk_1;

truncate historyreagentdata;
describe reagent_inventory.historyreagentdata;

alter table historyreagentdata
add column AuditId int not null;

alter table historyreagentdata
add foreign key(Lot_No) references reagentdata(Lot_No)





