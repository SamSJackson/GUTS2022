class PersonRaw():
	def __init__(self, student_id, name, age, sex, year, subject, height, hair, society, location):
		self._student_id = student_id;
		self._name = name;
		self._age = age;
		self._sex = sex;
		self._year = year;
		self._subject = subject;
		self._height = height;
		self._hair = hair;
		self._society = society;
		self._locations = []

	@property
	def student_id(self):
		return self._student_id

	@property
	def name(self):
		return self._name

	@property
	def age(self):
		return self._age

	@property
	def sex(self):
		return self._sex

	@property
	def year(self):
		return self._year

	@property
	def subject(self):
		return self._subject

	@property
	def height(self):
		return self._height

	@property
	def hair(self):
		return self._hair

	@property
	def society(self):
		return self._society

	@property
	def locations(self):
		return self._locations

	def add_location(self, location, time):
		self._locations.append([(location, time)])
	
	
	

