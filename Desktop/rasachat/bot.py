from rasa_core.agent import Agent
from rasa_core.channels.socketio import SocketIOInput
from rasa_core.agent import Agent
from rasa_core.utils import EndpointConfig

from bot_server_channel import BotServerInputChannel

# Creating the Interpreter and Agent
def load_agent(): 
    action_endpoint=EndpointConfig(url="http://localhost:5055/webhook")
    agent = Agent.load('models/dialogue', interpreter='models/nlu/current',action_endpoint=action_endpoint)
    return agent

# Creating the server
def main_server():
    agent = load_agent()
    channel = BotServerInputChannel(agent, port=5005)
    agent.handle_channels([channel], http_port=5005)

main_server()
