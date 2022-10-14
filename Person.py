class Person():
	def __init__(self, name, student_id):
		self._name = name;
		self._student_id = student_id;
		self._locations = []

	@property
	def name(self):
		return self._name

	@property
	def student_id(self):
		return self._student_id

	@property
	def locations(self):
		return self._locations

	def add_location(self, location, time):
		self._locations.append([(location, time)])
	
	
	

