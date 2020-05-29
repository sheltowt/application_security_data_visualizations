import json

with open('../raw_data/appsecco_dvna_2020-05-29-08_51_19_export.json') as json_file:
	data = json.load(json_file)

modified_object = {}
modified_object["children"] = []

for alert in data["site"][0]["alerts"]:
	alert_category = {}
	alert_category["Name"] = alert["name"]
	alert_category["Description"] = alert["desc"]
	alert_category["Count"] = alert["count"]
	alert_category["Solution"] = alert["solution"]
	modified_object["children"].append(alert_category)




with open('../public/dvna_sast.json', 'w') as outfile:
	json.dump(modified_object, outfile)