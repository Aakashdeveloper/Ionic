import sqlite3
from rasa_core_sdk import ActionExecutionRejection
from typing import Dict, Text, Any, List, Union
from rasa_core_sdk import Action
from rasa_core_sdk import Tracker
from rasa_core_sdk.events import SlotSet,AllSlotsReset
from rasa_core_sdk.executor import CollectingDispatcher
from rasa_core_sdk.forms import FormAction, REQUESTED_SLOT

global conn
conn=sqlite3.connect('amex.db')
class DB_Connect():
    def get_ans(self,intent_val):
        cur=conn.cursor()
        intent=intent_val
        sql="SELECT MAX(Answers) FROM train_data WHERE Intent=?"
        search=cur.execute(sql,(intent,))
        for row in search:
            search_result=row[0]
        return (search_result)
class FormActionGetAccess(FormAction):
    def name(self):
        print("name")
        return "form_get_access"
    
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Tool']
    def slot_mappings(self):
        return {"Tool": self.from_entity(entity="Tool",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['tm1','axp_im']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Tool':
                if value.lower() not in self.db_tool():
                    print("No Tool")
                    dispatcher.utter_template('utter_wrong_tool', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Tool')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Tool')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='get_access')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()]   
class FormActionAccessStatus(FormAction):
    def name(self):
        print("name")
        return "form_access_status"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Tool']
    def slot_mappings(self):
        return {"Tool": self.from_entity(entity="Tool",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['tm1','axp_im']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Tool':
                if value.lower() not in self.db_tool():
                    print("No Tool")
                    dispatcher.utter_template('utter_wrong_tool', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Tool')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Tool')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='access_status')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()] 
class ActionEmergencyAccess(Action):
    def name(self):
        return 'action_emergency_access'
    def run(self,dispatcher_emergency:CollectingDispatcher,tracker_emergency:Tracker,domain):
        tool_name=tracker_emergency.get_slot('Tool')
        db_obj=DB_Connect()
        response_emergency=db_obj.get_ans(intent_val="emergency_access") 
        dispatcher_emergency.utter_message(response_emergency)
        return [SlotSet('Tool',tool_name)]    
class FormUpdateAccess(FormAction):
    def name(self):
        print("name")
        return "form_update_access"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Tool']
    def slot_mappings(self):
        return {"Tool": self.from_entity(entity="Tool",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['tm1','axp_im']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Tool':
                if value.lower() not in self.db_tool():
                    print("No Tool")
                    dispatcher.utter_template('utter_wrong_tool', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Tool')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Tool')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='update_access')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()]        
        
class FormTraining(FormAction):
    def name(self):
        print("name")
        return "form_training"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Tool']
    def slot_mappings(self):
        return {"Tool": self.from_entity(entity="Tool",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['tm1','axp_im']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Tool':
                if value.lower() not in self.db_tool():
                    print("No Tool")
                    dispatcher.utter_template('utter_wrong_tool', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Tool')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Tool')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='training')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()]                    
class FormValidateError(FormAction):
    def name(self):
        print("name")
        return "form_validation_error"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Field']
    def slot_mappings(self):
        return {"Field": self.from_entity(entity="Field",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['reviewer comments','servicing cost opex']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Field':
                if value.lower() not in self.db_tool():
                    print("Not a  Field")
                    dispatcher.utter_template('utter_wrong_field', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Field')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Field')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='validation_error')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()]          
class FormError(FormAction):
    def name(self):
        print("name")
        return "form_error"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Document']
    def slot_mappings(self):
        return {"Document": self.from_entity(entity="Document",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['investment','report']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Document':
                if value.lower() not in self.db_tool():
                    print("Not a valid  Document")
                    dispatcher.utter_template('utter_wrong_document', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Document')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Document')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='error')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()]       

class ActionInputFieldError(Action):
    def name(self):
        return 'action_input_field_error'
    def run(self,dispatcher_input_error:CollectingDispatcher,tracker_input_error:Tracker,domain):
        doc_name=tracker_input_error.get_slot('Document')
        db_obj=DB_Connect()
        response_input_error=db_obj.get_ans(intent_val='input_field_error')
        dispatcher_input_error.utter_message(response_input_error)
        return[SlotSet('Document',doc_name)]
class ActionMissingRecord(Action):
    def name(self):
        return 'action_missing_records'
    def run(self,dispatcher_missing_record:CollectingDispatcher,tracker_missing_record:Tracker,domain):
        db_obj=DB_Connect() 
        response_missing_record=db_obj.get_ans(intent_val='missing_records')
        dispatcher_missing_record.utter_message(response_missing_record)
        return []
class FormReturnOnInvestment(FormAction):
    def name(self):
        print("name")
        return "form_return_on_investment"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Document']
    def slot_mappings(self):
        return {"Document": self.from_entity(entity="Document",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['investment']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Document':
                if value.lower() not in self.db_tool():
                    print("Not a valid  Document")
                    dispatcher.utter_template('utter_wrong_document', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Document')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Document')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='return_on_investment')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()]        
class FormViewInvestment(FormAction):
    def name(self):
        print("name")
        return "form_view_investment"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Inves_Document']
    def slot_mappings(self):
        return {"Inves_Document": self.from_entity(entity="Inves_Document",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['reporting cube','idr report','bi report','report']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Inves_Document':
                if value.lower() not in self.db_tool():
                    print("Not a valid  Document")
                    dispatcher.utter_template('utter_wrong_document', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Inves_Document')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Inves_Document')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='view_investment')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()] 
class ActionFx_Rate(Action):
    def name(self):
        return 'action_fx_rate'
    def run(self,dispatcher_fx_rate:CollectingDispatcher,tracker_fx_rate:Tracker,domain):
        tool_name=tracker_fx_rate.get_slot('Tool')
        doc_name=tracker_fx_rate.get_slot('Document')
        db_obj=DB_Connect()
        response_fx_rate=db_obj.get_ans(intent_val='fx_rate') 
        dispatcher_fx_rate.utter_message(response_fx_rate)
        return [SlotSet('Document',doc_name),SlotSet('Tool',tool_name)]
class ActionAdjustScreen(Action):
    def name(self):
        return 'action_adjust_screen'
    def run(self,dispatcher_adjust_screen:CollectingDispatcher,tracker_adjust_screen:Tracker,domain):
        tool_name=tracker_adjust_screen.get_slot('Tool')
        db_obj=DB_Connect()
        response_adjust_screen=db_obj.get_ans(intent_val='adjust_screen') 
        dispatcher_adjust_screen.utter_message(response_adjust_screen)
        return [SlotSet('Tool',tool_name)]
class ActionUnfundedRequest(Action):
    def name(self):
        return 'action_unfunded_request'
    def run(self,dispatcher_unfunded_request:CollectingDispatcher,tracker_unfunded_request:Tracker,domain):
        doc_name=tracker_unfunded_request.get_slot('Document')
        team_name=tracker_unfunded_request.get_slot('Team')
        db_obj=DB_Connect()
        reponse_unfunded_request=db_obj.get_ans(intent_val='unfunded_request') 
        dispatcher_unfunded_request.utter_message(reponse_unfunded_request)
        return [SlotSet('Document',doc_name),SlotSet('Team',team_name)]    
class FormViewOfflineTemplate(FormAction):
    def name(self):
        print("name")
        return "form_view_offline_template"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        print("Required Slot")
        return ['Temp_Document']
    def slot_mappings(self):
        return {"Temp_Document": self.from_entity(entity="Temp_Document",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        print("db tool")
        return ['tmp template']
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Temp_Document':
                if value.lower() not in self.db_tool():
                    print("Not a valid  Document")
                    dispatcher.utter_template('utter_wrong_document', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Submit")
        tool_name=tracker.get_slot('Temp_Document')
        print("Before",tool_name)
        SlotSet('Tool',None)
        tool_name=tracker.get_slot('Temp_Document')
        print("After",tool_name)
        db_obj=DB_Connect()
        response_access=db_obj.get_ans(intent_val='view_offline_template')
        dispatcher.utter_message(response_access)
        return [AllSlotsReset()] 

class FormFeedback(FormAction):
    def name(self):
        return "form_feedback"
    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        return ['Score']
    def slot_mappings(self):
        return {"Score": self.from_entity(entity="Score",not_intent="emergency_access")}
    @staticmethod
    def db_tool():
        return ["bad",'okay','good',"awesome"]
    
    
    def validate(self,dispatcher: CollectingDispatcher,tracker: Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        print("Validate")
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        slot_to_fill = tracker.get_slot(REQUESTED_SLOT)
        if slot_to_fill:
            slot_values.update(self.extract_requested_slot(dispatcher,tracker, domain))
            if not slot_values:
                raise ActionExecutionRejection(self.name(),
                                               "Failed to validate slot {0} "
                                               "with action {1}"
                                               "".format(slot_to_fill,
                                                         self.name()))
        for slot, value in slot_values.items():
            if slot == 'Score':
                if value.lower() not in self.db_tool():
                    dispatcher.utter_template('utter_wrong_feedback', tracker)
                    slot_values[slot] = None
        return [SlotSet(slot, value) for slot, value in slot_values.items()]
    def submit(self,dispatcher:CollectingDispatcher,tracker:Tracker,domain: Dict[Text, Any]) -> List[Dict]:
        tool_name=tracker.get_slot('Score')
        dispatcher.utter_template('utter_submit',tracker)
        return [AllSlotsReset()] 
