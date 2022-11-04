<script>
	import FullCalendar, { Draggable } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';
	import timegridPlugin from '@fullcalendar/timegrid';
	import interactionPlugin from '@fullcalendar/interaction';

	let options = {
		dateClick: handleDateClick,
		droppable: false,
		editable: false,
		events: [
        {
          title: 'All Day Event',
          start: '2022-10-01'
        },
        {
          title: 'Long Event',
          start: '2022-10-03',
          end: '2022-10-06'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-10-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-10-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '11',
          end: '2022-10-13'
        },
        {
          title: 'Meeting',
          start: '2022-10-12T10:30:00',
          end: '2022-10-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2022-10-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2022-10-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2022-10-20T07:00:00'
        },
        {
          title: 'Evant with link',
          url: 'http://google.com/',
          start: '2022-10-28'
        }
      ],
		initialView: 'dayGridMonth',
		plugins: [daygridPlugin, timegridPlugin, interactionPlugin],
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay',
		},
		height: '100%',
		weekends: true,
	};

	let calendarComponentRef;

	function handleDateClick(event) {
		if (
			confirm('Would you like to add an event to ' + event.dateStr + ' ?')
		) {
			const { events } = options;
			const calendarEvents = [
				...events,
				{
					title: 'New Event',
					start: event.date,
					allDay: event.allDay,
				},
			];
			options = {
				...options,
				events: calendarEvents,
			};
		}
	}
</script>

<svelte:head>
	<title>SvelteKit project template</title>
</svelte:head>

<div class="demo-app">
	


	<div class="demo-app-calendar">
		<FullCalendar bind:this={calendarComponentRef} {options} />
	</div>
</div>
<style>
	:global(* > *) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.demo-app {
		width: 100vw;
		height: 100vh;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
		font-size: 14px;
	}

	.demo-app-calendar {
		width: 100%;
		flex-grow: 1;
		margin: 0 auto;
		max-width: 900px;
	}
	:global(.draggable) {
		color: white;
		background: #3788d8;
		width: fit-content;
		padding: 1rem;
		margin: 1rem;
		cursor: pointer;
	}
</style>